"use client";

import { Container } from "react-bootstrap";
import Image from "next/image";

const CLIENTS: number[] = [1, 2, 3, 4, 5, 6, 7];

const Clients: React.FC = () => (
  <Container>
    <HeaderSection />
    <ClientsGrid />
  </Container>
);

const HeaderSection: React.FC = () => (
  <div className="font-inter" data-aos="fade-down">
    <h1 className="text-gray-900 fs-1 fw-bold">Our Clients</h1>
    <p className="text-gray-200 fw-light fs-6">
      We have been working with some Fortune 500+ clients
    </p>
  </div>
);

const ClientsGrid: React.FC = () => (
  <div className="d-flex align-items-center w-100 justify-content-between flex-wrap mt-5" data-aos="zoom-in">
    {CLIENTS.map((client) => (
      <ClientImage key={client} client={client} />
    ))}
  </div>
);

interface ClientImageProps {
  client: number;
}

const ClientImage: React.FC<ClientImageProps> = ({ client }) => (
  <Image
    src={`/Clients/client${client}.svg`}
    width={48}
    height={48}
    alt={`client-${client}`}
  />
);

export default Clients;
