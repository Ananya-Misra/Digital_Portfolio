
import {BallCanvas} from "../components/canvas";
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {
        technologies.map((technology, index)=>(
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas key={technology.name} icon={technology.icon}/>
            </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech,"");