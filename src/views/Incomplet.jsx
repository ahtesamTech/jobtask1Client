
import Cards from "../components/Cards";


const Incomplete = ({title,children,bg}) => {
    return (
       <div className="bg-gray-300 rounded-md  ">

    <div className="m-2 flex justify-between items-center h-10">
       <div className="flex gap-1">
       <span className={`px-3 flex items-center text-sm py-2 ml-5 ${bg} text-gray-600 font-bold rounded-l-xl`}></span>
       <h1 className="text-black font-bold">{title}</h1>
       </div>
        <span className="px-2 flex items-center text-sm py-1 ml-5 bg-gray-200 text-gray-600 font-bold rounded">

                        0</span>
    </div>

         <div className="myScroll h-screen" >
            
            {
                children
            }
          </div>
       </div>
       
    );
};

export default Incomplete;