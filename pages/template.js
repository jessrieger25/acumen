import { CourseSwitcher } from "../components/template/CourseSwitcher";
import { Sidebar } from "../components/template/Sidebar";
import { SideNavigation } from "../components/template/AssignmentNavigation";
import { SideHeader } from "../components/template/SideHeader";
import { PlusButton } from "../components/template/SidePlusButton";
import { SideNavigationList } from "../components/template/SideNavigationList";
import { SideNavigationLink } from "../components/template/SideNavigationLink";
import { SideBarButton } from "../components/template/SideBarButton";
import { TopNavigation } from "../components/template/top-nav/TopNavigation";
import { BreadcrumbLink } from "../components/template/top-nav/BreadcrumbLink";
import { useState } from "react";
import { CreateAssignmentModal } from "../components/modal/CreateAssignmentModal";
import { Table } from "../components/table/Table";
import { SubmissionRow } from "../components/table/SubmissionRow";
import { SubmissionHeader } from "../components/table/SubmissionHeader";
import { WarningBadge } from "../components/badges/WarningBadge";
import { Main } from "../components/template/Main";
import { Hint } from "../components/text/Hint";
import { DownloadIcon } from "../components/icons/DownloadIcon";
import { DownloadButton } from "../components/DownloadButton";

const links = [
  {
    text: "Hello world",
    href: "#",
    active: true,
  },
  {
    text: "for-loops",
    href: "#",
  },
  {
    text: "A really long title for this assignment",
    href: "#",
  },
];
const submissions = [
  {
    number: 3,
    status: "pending",
    href: "#",
    name: "submission-3.py",
    time: "just now",
  },
  {
    number: 2,
    status: "pass",
    href: "#",
    name: "submission.py",
    time: "2 days ago",
  },
  {
    number: 1,
    status: "fail",
    href: "#",
    name: "submission.py",
    time: "4 days ago",
  },
];
export default function Template() {
  const [modal, setModal] = useState(null);
  const addAssignment = () => {
    setModal(<CreateAssignmentModal close={() => setModal(null)} />);
  };
  return (
    <>
      {modal}
      <div className="flex items-stretch">
        <Sidebar>
          <CourseSwitcher />
          <SideNavigation>
            <SideHeader
              text="Assignments"
              button={
                <PlusButton
                  description="Add an assignment"
                  onClick={addAssignment}
                />
              }
            />
            <SideNavigationList>
              {links.map((link) => (
                <SideNavigationLink link={link} key={link.text + link.href} />
              ))}
            </SideNavigationList>
          </SideNavigation>
          <SideBarButton onClick={addAssignment}>
            <span className="text-xl mr-1">+</span> Create Assignment
          </SideBarButton>
        </Sidebar>
        <div className="flex-grow flex flex-col">
          <TopNavigation>
            {links.map((link) => (
              <BreadcrumbLink link={link} key={link.text + link.href} />
            ))}
          </TopNavigation>
          <Main title="Hello world">
            <p className="max-w-prose">
              Get your environment set up, and create a program that prints
              "hello world!" Have another statement that also prints out your
              own name.
            </p>
            <br></br>
            <h2 className="text-2xl font-semibold mb-2">Test Files</h2>
            <DownloadButton href="#">Starter template</DownloadButton>
            <p>
              Tests <Hint>(Only you can see these)</Hint>
            </p>
            <br></br>
            <a href="#" className="py-2 px-4 text-blue-600 rounded underline">
              Submissions
            </a>
          </Main>
        </div>
      </div>
    </>
  );
}
