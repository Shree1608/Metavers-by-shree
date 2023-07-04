// import * as React from "react";

// import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries} from'@syncfusion/ej2-react-charts';
// import { ILoadedEventArgs } from '@syncfusion/ej2-charts';


// const RoleInBusinness = () => {

//   const data: any[] = [
//     { x: 'Egg', y: 106 },
//     { x: 'Fish', y: 103 },
//     { x: 'Misc', y: 198 },
//     { x: 'Tea', y: 189 },
//     { x: 'Fruits', y: 250 }
//   ];
//   const primaryxAxis: AxisModel = { valueType: 'Category', interval: 1, tickPosition: 'Inside',
//                         labelPosition:'Inside', labelStyle: { color: '#ffffff' } };
//   const primaryyAxis: AxisModel = { minimum: 0, maximum: 300, interval: 50, labelStyle: { color: 'transparent' } };
//   let count = 0;
//   const onChartLoad = (args: ILoadedEventArgs): void => {
//     let chart: Element | null = document.getElementById('charts');
  
//     if (chart) {
//       chart.setAttribute('title', '');
  
//       let columninterval = setInterval(() => {
//         if (document.getElementById('charts')) {
//           if (count === 0) {
//             args.chart.series[0].dataSource = [
//               { x: 'Egg', y: 206 },
//               { x: 'Fish', y: 123 },
//               { x: 'Misc', y: 48 },
//               { x: 'Tea', y: 240 },
//               { x: 'Fruits', y: 170 }
//             ];
//             args.chart.animate();
//             count++;
//           } else if (count === 1) {
//             args.chart.series[0].dataSource = [
//               { x: 'Egg', y: 86 },
//               { x: 'Fish', y: 173 },
//               { x: 'Misc', y: 188 },
//               { x: 'Tea', y: 109 },
//               { x: 'Fruits', y: 100 }
//             ];
//             args.chart.animate();
//             count++;
//           } else if (count === 2) {
//             args.chart.series[0].dataSource = [
//               { x: 'Egg', y: 156 },
//               { x: 'Fish', y: 33 },
//               { x: 'Misc', y: 260 },
//               { x: 'Tea', y: 200 },
//               { x: 'Fruits', y: 30 }
//             ];
//             args.chart.animate();
//             count = 0;
//           }
//         } else {
//           clearInterval(columninterval);
//         }
//       }, 2000);
//     }
//   };
//   return (
//     <div>
//        <ChartComponent
//       id='charts'
//       primaryXAxis={primaryxAxis}
//       primaryYAxis={primaryyAxis}
//       title='Olympic Medals'
//       loaded={onChartLoad}
//     >
//       <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
//       <SeriesCollectionDirective>
//         <SeriesDirective
//           dataSource={data}
//           type='Column'
//           xName='x'
//           width={2}
//           yName='y'
//           name='Tiger'
//           cornerRadius={{ bottomLeft: 10, bottomRight: 10, topLeft: 10, topRight: 10 }}
//           marker={{ dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }}
//         >
//         </SeriesDirective>
//       </SeriesCollectionDirective>
//     </ChartComponent>
//     </div>
//   )
// }

// export default RoleInBusinness

import { Typography , Progress } from '@material-tailwind/react'
import { Grid,  } from '@nextui-org/react'
// import { Progress } from 'flowbite-react'
import React, { useMemo, useRef } from 'react'
import { animate, motion, useInView } from 'framer-motion';


// const contetntStyle = {
//   transition:'o.3s'
// }

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren:0.4,
    }
  }
}
const item = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      type: "tween",
      damping: 5,
      stiffness: 70,
    }
  }
}
const RoleInBusinness = () => {
  const ref = useRef(null)
  const isInView = useInView(ref,{once:true})

  return (
    <motion.div variants={container}
    initial ="hidden"
    whileInView="show"
    viewport={{once:true}}
     className='bg-black '
     id='role'>
    
      
      <motion.h1
  variants={item}
  className=' text-center text-transparent text-6xl font-extrabold  bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-700'>Role in the future of business</motion.h1>
     
      <motion.div variants={item} className=" w-1/2 m-auto pt-7 ">
        <div className="flex items-center justify-between gap-4 mb-2">
        <Typography color="white" variant="h6">Business model building</Typography>
        <Typography color="white" variant="h6">53%</Typography>
      </div>
        <progress  
          aria-labelledby="p04e-label"
          id="p04e"
          max="100"
          value="53"
          
          className=" transition-all ease-out duration-1000
           block w-full overflow-hidden m-auto rounded-xl bg-slate-500 [&::-webkit-progress-bar]:bg-blue-300 [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-900"
        >
        100%
        </progress>  
      </motion.div>
      <motion.div  variants={item} className=" w-1/2 m-auto pt-7 ">
        <div className="flex items-center justify-between gap-4 mb-2">
        <Typography color="white" variant="h6">Infrastructure and back-end engineering</Typography>
        <Typography color="white" variant="h6">38%</Typography>
      </div>
        <progress 
          aria-labelledby="p04e-label"
          id="p04e"
          max="100"
          value="38"
         
         
          className="block w-full overflow-hidden m-auto rounded-xl bg-slate-500 [&::-webkit-progress-bar]:bg-blue-300 [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-900"
        >
        100%
        </progress>      
      </motion.div>
      <motion.div variants={item} className=" w-1/2 m-auto pt-7 ">
        <div className="flex items-center justify-between gap-4 mb-2">
        <Typography color="white" variant="h6">product devlopment and coding</Typography>
        <Typography color="white" variant="h6">42%</Typography>
      </div>
        <progress 
          aria-labelledby="p04e-label"
          id="p04e"
          max="100"
          value="42"
          className="block w-full overflow-hidden m-auto rounded-xl bg-slate-500 [&::-webkit-progress-bar]:bg-blue-300 [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-900"
        >
        100%
        </progress>
      </motion.div>
      <motion.div variants={item} className=" w-1/2 m-auto pt-7 ">
        <div className="flex items-center justify-between gap-4 mb-2">
        <Typography color="white" variant="h6">Blockchain , commerce and payments</Typography>
        <Typography color="white" variant="h6">37%</Typography>
      </div>
        <progress 
          aria-labelledby="p04e-label"
          id="p04e"
          max="100"
          value="37"
          className="block w-full overflow-hidden m-auto rounded-xl bg-slate-500 [&::-webkit-progress-bar]:bg-blue-300 [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-900"
        >
        100%
        </progress>
      </motion.div>
      <motion.div variants={item}  className=" w-1/2 m-auto pt-7 ">
        <div className="flex items-center justify-between gap-4 mb-2">
        <Typography color="white" variant="h6">process engineering </Typography>
        <Typography color="white" variant="h6">12%</Typography>
      </div>
        <progress 
          aria-labelledby="p04e-label"
          id="p04e"
          max="100"
          value="12"
          className="block w-full overflow-hidden m-auto rounded-xl bg-slate-500 [&::-webkit-progress-bar]:bg-blue-300 [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-900"
        >
        100%
        </progress>
      </motion.div>
      <motion.div variants={item} className=" w-1/2 m-auto pt-7 ">
        <div className="flex items-center justify-between gap-4 mb-2">
        <Typography color="white" variant="h6">Graphics design</Typography>
        <Typography color="white" variant="h6">19%</Typography>
      </div>
        <progress 
          aria-labelledby="p04e-label"
          id="p04e"
          max="100"
          value="19"
          className="block w-full overflow-hidden m-auto rounded-xl bg-slate-500 [&::-webkit-progress-bar]:bg-blue-300 [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-900"
        >
        100%
        </progress>
      </motion.div>
      <motion.div variants={item} className=" w-1/2 m-auto pt-7 ">
        <div className="flex items-center justify-between gap-4 mb-2">
        <Typography color="white" variant="h6">Cybersecurity</Typography>
        <Typography color="white" variant="h6">33%</Typography>
      </div>
        <progress 
          aria-labelledby="p04e-label"
          id="p04e"
          max="100"
          value="33"
          className="block w-full overflow-hidden m-auto rounded-xl bg-slate-500 [&::-webkit-progress-bar]:bg-blue-300 [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-900"
        >
        100%
        </progress>
      </motion.div>
      <motion.div variants={item} className=" w-1/2 m-auto pt-7 ">
        <div className="flex items-center justify-between gap-4 mb-2">
        <Typography color="white" variant="h6">Content creation</Typography>
        <Typography color="white" variant="h6">29%</Typography>
      </div>
        <progress 
          aria-labelledby="p04e-label"
          id="p04e"
          max="100"
          value="29"
          className="block w-full overflow-hidden m-auto rounded-xl bg-slate-500 [&::-webkit-progress-bar]:bg-blue-300 [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-900"
        >
        100%
        </progress>
      </motion.div>
     
   
    </motion.div>

    
  )
}

export default RoleInBusinness

