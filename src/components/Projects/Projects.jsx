import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { projectData } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import "./Projects.css";
import SubscriptionForm from "../SubscriptionForm";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <>
    <div className="grid m-4">
      {projectData?.map((project) => (
        <div key={project.id} className="col-12 md:col-4 lg:col-4">
          <Card
            title={project.title}
            subTitle={project.subtitle}
            header={
              <img
                alt="Project"
                src={project.image}
                className="w-full h-12rem object-cover"
              />
            }
            footer={
              <div className="flex justify-content-between align-items-center w-full">
                <div>
                  <div className="meta-item">
                    <span className="meta-label">Level:</span> {project?.level}
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Type:</span>{" "}
                    {project?.company ? "Company" : "Personal"}
                  </div>
                </div>

                <div>
                  {project?.link ? (
                    <Button
                      severity="warning"
                      label="View"
                      onClick={() =>
                        window.open(
                          project.link,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                      className="p-button-sm"
                    />
                  ) : (
                    <Button
                      severity="warning"
                      label="Currently Working"
                      className="p-button-sm"
                      disabled
                    />
                  )}
                </div>
              </div>
            }
            pt={{
              title: { style: { minHeight: "2.5rem" } },
              subTitle: { style: { minHeight: "1.5rem" } },
              root: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                },
              },
              body: {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  justifyContent: "space-between",
                },
              },
              footer: {
                style: {
                  marginTop: "auto",
                },
              },
            }}
            className="shadow-3"
          >
            <p
              className="m-0"
            >
              {project.currentlyWorking ? "Description is not available yet." : project.description}
            </p>
          </Card>
        </div>
      ))}
    </div>
    <div className="m-5">
      <SubscriptionForm/>
    </div>
    </>
  );
}
