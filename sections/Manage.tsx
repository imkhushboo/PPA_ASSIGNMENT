import { Container } from "react-bootstrap";
import ManageCard from "@/components/Card/ManageCard";

interface ManageContentItem {
  id: number;
  title: string;
  imgUrl: string;
}

const ManageContent: ManageContentItem[] = [
  {
    id: 1,
    title: "Membership Organisations",
    imgUrl: "/Features/icon1.svg",
  },
  {
    id: 2,
    title: "National Associations",
    imgUrl: "/Features/icon2.svg",
  },
  {
    id: 3,
    title: "Clubs And Similar Groups",
    imgUrl: "/Features/icon3.svg",
  },
];

const Manage = () => (
  <Container>
    <div data-aos="fade-down">
      <h1 className="fs-1 lh-base text-gray-900 fw-bold">
        Manage your entire community <br /> in a single system
      </h1>
      <p className="text-gray-200 fw-light fs-6">
        Who is Nextcent suitable for?
      </p>
    </div>
    <div className="mt-4 d-flex flex-lg-row flex-column justify-content-between align-items-center">
      {ManageContent.map((card) => (
        <ManageCard key={card.id} {...card} />
      ))}
    </div>
  </Container>
);

export default Manage;
