import React, { useState, useEffect } from 'react';
import data from '../../data';
import WorkItem from '../WorkItems';
import CustomButton from '../CustomButton';
import LogoAnim from '../../LogoAnim';

export default function Work({
  openId, themeColor, 
  toggleDescription, 
  layoutTheme, highLightTxtOne, 
  bodyTxt, highLightTxt, bodyPadding, className
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
      className={`pb-7 md:mt-5`}
      bodyTxt={bodyTxt}
      openId={openId}
      toggleDescription={toggleDescription}
    />
  ));

  return (
    <section className={`py-[110px] px-4 pb-[130px] ${bodyPadding}`}>
      {loadData !== null ? ( // Check if data has been loaded
        <div className={``}>
          <h1 className={`${highLightTxt} text-center pb-5`}>
            Works
            <span className={`${highLightTxtOne} block`}> What I have made</span>
          </h1>
          <div>
            {workItems}
          </div>
          <a href="https://github.com/OGBENI-NG" target="_blank">
            <CustomButton className={`w-full py-2`}>
              More work on GitHub
            </CustomButton>
          </a>
        </div>
      ) : (
        <div className={` h-[400px] p-0 flex items-center justify-center m-auto`}>
          <LogoAnim className='m-auto bg-transparent'/>
        </div>
      )}
    </section>
  );
}
