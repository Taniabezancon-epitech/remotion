export interface Slide {
  id: number;
  title: string;
  by: string;
  description: string;
  color: string;
  avatar: string;
}

const slidesData: Slide[] = [
  {
    id: 1,
    title: "Initiates the process",
    by: "Employee",
    description: "Fill the quotation request",
    color: "black",
    avatar:
      "https://cdn.vectorstock.com/i/preview-1x/54/48/sent-mail-icon-isolated-on-black-mail-symbol-vector-45985448.jpg",
  },
  {
    id: 2,
    title: "Approval",
    by: "Manager",
    description:
      "The manager has to review the requirements and check the compliance",
    color: "black",
    avatar:
      "https://www.shutterstock.com/image-vector/pixel-perfect-editable-stroke-scalable-260nw-2255469697.jpg",
  },
  {
    id: 2,
    title: "Sending more informations",
    by: "Director",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam vestibulum mi nisl, ac tincidunt orci pretium quis. ",
    color: "black",
    avatar:
      "https://cdn1.iconfinder.com/data/icons/miscellaneous-161-line/128/agree_concur_consent_permit_terms_conditions_accept_agreement_document_condition_license-512.png",
  },
  // {
  //   id: 3,
  //   title: "Sending more informations",
  //   by: "Director",
  //   description:
  //     "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam vestibulum mi nisl, ac tincidunt orci pretium quis. ",
  //   color: "black",
  //   avatar:
  //     "https://cdn1.iconfinder.com/data/icons/miscellaneous-161-line/128/agree_concur_consent_permit_terms_conditions_accept_agreement_document_condition_license-512.png",
  // },
];

export { slidesData };
