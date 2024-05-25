// import React, { useState, useEffect } from 'react';
// //import data from '../../data';
// import WorkItem from '../WorkItems';
// import CustomButton from '../CustomButton';
// import LoadingLogo from '../../LoadingLogo';




// export default function Work({
//   openId, themeColor,
//   toggleDescription, theme,
//   layoutTheme, highLightTxtOne,
//   bodyTxt, highLightTxt, bodyPadding,
//   brandColor, firebaseData, loadData
// }) {





//   // Render work items directly without conditional rendering
//   const workItems = firebaseData.map(item => (
//     <WorkItem
//       key={item.id}
//       item={item}
//       layoutTheme={layoutTheme}
//       themeColor={themeColor}
//       className={`pb-5 md:mt-5 lg:pb-0 lg:mt-0`}
//       bodyTxt={bodyTxt}
//       openId={openId}
//       theme={theme}
//       toggleDescription={toggleDescription}
//       brandColor={brandColor}
//     />
//   ));

//   return (
//     <section className={`py-[110px] pb-[130px]`}>
//       <div className={`${bodyPadding} ${loadData && `fixed inset-0
//            ${theme === 'light' ? 'bg-lightest :bg-light/20':'bg-darkest'} z-10`}`}>
//         {loadData ? ( // Check if data is still loading
//           <div className={`flex justify-center items-center h-screen`}>
//             <LoadingLogo className='m-auto '/>
//           </div>
//         ) : (
//           <div>
//             <h1 className={`${highLightTxt} text-center pb-5 lg:pb-8`}>
//               Works
//               <span className={`${highLightTxtOne} block`}> What I have made</span>
//             </h1>
//             <div className='lg:grid lg:grid-cols-2 xl:grid-cols-3 xl:gap-5 lg:gap-6'>
//               {workItems}
//             </div>
//             <a className='w-full lg:w-max lg:block lg:m-auto ' href="https://github.com/OGBENI-NG" target="_blank">
//               <CustomButton
//                 theme={theme}
//                 className={`py-2 md:py-3 lg:py-1 lg:mt-12 text-lg md:text-2xl lg:text-lg lg:px-12`}>
//                 More work on GitHub
//               </CustomButton>
//             </a>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from 'react';
import WorkItem from '../WorkItems';
import CustomButton from '../CustomButton';
import LoadingLogo from '../../LoadingLogo';
import fetchDataWithImages from '../../fetchData';

export default function Work({
  openId, themeColor,
  toggleDescription, theme,
  layoutTheme, highLightTxtOne,
  bodyTxt, highLightTxt, bodyPadding,
  brandColor
}) {
  const [firebaseData, setFirebaseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initialize to true

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchDataWithImages();
      setFirebaseData(fetchedData);
      setIsLoading(false); // Set to false after data is fetched
    };

    fetchData();
  }, []);

  return (
    <section className={`py-[110px] pb-[130px]
      ${theme === 'light' ? 'bg-light/30':'bg-darkest'}`}>
      <div className={`${bodyPadding}`}
      >
        {isLoading ? (
          <div className={`flex justify-center items-center m-auto w-[300px] h-[200px]`}>
            <LoadingLogo 
              className=" mt-[75px] md:mt-0" />
          </div>
        ) : (
          <div>
            <h1 className={`${highLightTxt} text-center pb-5 lg:pb-8`}>
              Works
              <span className={`${highLightTxtOne} block`}> What I have made</span>
            </h1>
            <div className='lg:grid lg:grid-cols-2 xl:grid-cols-3 xl:gap-5 lg:gap-6'>
              {firebaseData.map(item => (
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
              ))}
            </div>
            <a className='w-full lg:w-max lg:block lg:m-auto ' href="https://github.com/OGBENI-NG" target="_blank">
              <CustomButton
                theme={theme}
                className={`py-2 md:py-3 lg:py-1 lg:mt-12 text-lg md:text-2xl lg:text-lg lg:px-12`}>
                More work on GitHub
              </CustomButton>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

