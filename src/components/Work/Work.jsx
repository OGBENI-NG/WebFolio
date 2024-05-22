import React, { useState, useEffect } from 'react';
import data from '../../data';
import WorkItem from '../WorkItems';
import CustomButton from '../CustomButton';
import LoadingLogo from '../../LoadingLogo';

export default function Work({
  openId, themeColor, 
  toggleDescription, theme,
  layoutTheme, highLightTxtOne, 
  bodyTxt, highLightTxt, bodyPadding,
  brandColor
}) {
  const [loadData, setLoadData] = useState(null); // Initialize to null

  useEffect(() => {
    const fetchData = async () => {
      // Simulating fetching data asynchronously from your system
      await new Promise((resolve) => setTimeout(resolve, 3500)); // Simulate delay
      const fetchedData = data.workEl; // Replace with your actual data fetching logic
      setLoadData(fetchedData);
    };

    fetchData();
  }, [loadData]);

  // Render work items directly without conditional rendering
  const workItems = loadData && loadData.map(item => (
    <WorkItem
      key={item.id} 
      item={item} 
      layoutTheme={layoutTheme} 
      themeColor={themeColor}
      className={`pb-5 md:mt-5 lg:pb-0 lg:mt-0`}
      bodyTxt={bodyTxt}
      openId={openId}
      theme={theme}
      toggleDescription={toggleDescription}
      brandColor={brandColor}
    />
  ));

  return (
    <section className={`py-[110px] pb-[130px]`}>
      <div className={`${bodyPadding} 
        ${!loadData && `fixed inset-0 animate-none
           ${theme === 'light' ? 'bg-light':'bg-darkest'} z-10`}`}>
        {loadData !== null ? ( // Check if data has been loaded
          <div className={``}>
            <h1 className={`${highLightTxt} text-center pb-5 lg:pb-8`}>
              Works
              <span className={`${highLightTxtOne} block`}> What I have made</span>
            </h1>
            <div className='lg:grid lg:grid-cols-2 xl:grid-cols-3 xl:gap-5 lg:gap-6'>
              {workItems}
            </div>
            <a className='w-full lg:w-max lg:block lg:m-auto ' href="https://github.com/OGBENI-NG" target="_blank">
              <CustomButton 
                theme={theme} 
                className={`py-2 md:py-3 lg:py-1 lg:mt-12 text-lg md:text-2xl lg:text-lg lg:px-12`}>
                More work on GitHub
              </CustomButton>
            </a>
          </div>
        ) : (
          <div className={`flex justify-center items-center h-screen`}>
            <LoadingLogo className='m-auto '/>
          </div>
        )}
      </div>
    </section>
  );
}
