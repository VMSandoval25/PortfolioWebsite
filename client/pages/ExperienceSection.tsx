import React from 'react';
import { FaSchool, FaBriefcase, FaFilePdf } from "react-icons/fa";
import Typed from "react-typed";


type ExperienceData = {
  id: number;
  title: string;
  location: string;
  body: string;
  date: string;
  icon: string;
  url: string;
};

const IconMap = {
  FaSchool: FaSchool,
  FaBriefcase: FaBriefcase,
  FaFilePdf: FaFilePdf,
};

type ExperienceSectionProps = {
  data: ExperienceData[]; // Prop for passing an array of data to the component
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ data }) => {
  return (
    <section id="experience" className="bg-slate-700 flex items-center justify-center">
      <div className="container mx-auto h-max">
        <h2 className="section-text-2 pt-20  text-5xl font-bold mb-4">
          <Typed
            strings={["Experience_"]}
            backSpeed={100}
          />
        </h2>
        {data.map((item, index) => (

          <div key={item.id} >
            {item.id % 2 !== 0 &&
              <div className="column-left">
                <div className="col-card-left">
                  <div className="col-card-title col-card-title-left">{item.title}</div>
                  <div className="col-card-subtitle col-card-subtitle-left">{item.location}</div>
                  <div className="col-card-para">
                    {item.body}
                  </div>
                  {/* <a className="numberCircle" href={protocol + item.url} target="_blank">{item.url}</a> */}
                </div>
              </div>
            }
            {item.id % 2 !== 0 &&
              <div className="column-right" >
                <div className="col-note col-note-right">
                  <p>{item.date}</p>
                </div>
              </div>
            }

            <div className="column-center" >
              {item.id % 2 !== 0 &&
                <div className="triangle-left"></div>
              }
              {item.id % 2 === 0 &&
                <div className="triangle-right"></div>
              }
              {/* <div className="line"></div> */}
              <div className="circle">
                {React.createElement(IconMap[item.icon], { className: 'icon' })}
              </div>
            </div>

            {item.id % 2 === 0 &&
              <div className="column-right" >
                <div className="col-card-right">
                  <div className="col-card-title col-card-title-right">{item.title}</div>
                  <div className="col-card-subtitle col-card-subtitle-right">{item.location}</div>
                  <div className="col-card-para">
                    {item.body}
                  </div>
                  {/* <a className="numberCircle" href={protocol + item.url} target="_blank">{item.url}</a> */}
                </div>
              </div>
            }
            {item.id % 2 === 0 &&
              <div className="column-left" >
                <div className="col-note col-note-left">
                  <p>{item.date}</p>
                </div>
              </div>
            }
            <div className="clearfix"></div>
          </div>



        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;



