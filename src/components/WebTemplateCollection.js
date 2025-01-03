import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import PopularTags from "../components/PopularTags";
import '../components/WebTemplateCollection.css';

const WebTemplateCollection = () => {
  const breadcrumbs = [
    { label: "All Items", link: "/all-items" },
    { label: "Web Templates", link: "/web-templates" },
  ];

  const popularTags = [
    { label: "Portfolio", link: "/web-templates/portfolio" },
    { label: "Ecommerce", link: "/web-templates/ecommerce" },
    { label: "React", link: "/web-templates/react" },
    { label: "Agency", link: "/web-templates/agency" },
    { label: "Bootstrap", link: "/web-templates/bootstrap" },
    { label: "Animation", link: "/web-templates/animation", trending: true },
  ];

  return (
    <div className="web-template-collection">
      <div className="web-template-header">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="title">
          <h1>Website Templates</h1>
        </div>
        <div className="description">
          <p>
            Discover our range of fully customizable email, admin, landing page,
            and website templates.<br/> Created by web pros, these responsive designs
            are perfect for building your online presence.
          </p>
        </div>
      </div>
      <PopularTags tags={popularTags} />
    </div>
  );
};

export default WebTemplateCollection;
