import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { projectData } from '../../utils/data';


export default function Projects() {
  return (
    <div className="grid p-4">
      {projectData?.map((project) => (
        <div key={project.id} className="col-12 md:col-3 lg:col-4">
          <Card
            title={project.title}
            subTitle={project.subtitle}
            header={<img alt="Project" src={project.image} className="w-full h-12rem object-cover" />}
            footer={
              <div className="flex justify-content-end">
                <Button label="View" />
              </div>
            }
            className="h-full flex flex-column justify-content-between shadow-3"
            style={{ minHeight: '100%' }}
          >
            <div className="flex-grow-1">
              <p className="m-0">{project.description}</p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
