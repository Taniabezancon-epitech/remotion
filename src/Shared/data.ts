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
    title: "Welcome to WorkflowStudio AI",
    by: "Your manager just sent you a form, do you approve ?",
    description: "Please click one of the button Approve or reject",
    color: "black",
    avatar:
      "https://cdn.vectorstock.com/i/preview-1x/54/48/sent-mail-icon-isolated-on-black-mail-symbol-vector-45985448.jpg",
  },
  {
    id: 2,
    title: "Approved",
    by: "Manager",
    description:
      "The manager has to review the requirements and check the compliance",
    color: "black",
    avatar:
      "https://www.shutterstock.com/image-vector/pixel-perfect-editable-stroke-scalable-260nw-2255469697.jpg",
  },
  {
    id: 2,
    title: "Rejected",
    by: "Director",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam vestibulum mi nisl, ac tincidunt orci pretium quis. ",
    color: "black",
    avatar: "https://static.thenounproject.com/png/60886-200.png",
  },
  {
    id: 3,
    title: "Sending more informations",
    by: "Director",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam vestibulum mi nisl, ac tincidunt orci pretium quis. ",
    color: "black",
    avatar:
      "https://cdn1.iconfinder.com/data/icons/miscellaneous-161-line/128/agree_concur_consent_permit_terms_conditions_accept_agreement_document_condition_license-512.png",
  },
];

export { slidesData };

export const approvalSlides: Slide[] = [
  {
    id: 0,
    title: "Approval 1",
    avatar: "https://source.unsplash.com/800x600/?cat",
    description: "This is the first slide of the approval presentation.",
    by: "John Doe",
    color: "black",
  },
  {
    id: 1,
    title: "Your request has been Approved",
    avatar: "https://source.unsplash.com/800x600/?dog",
    description: "This is the approval slide data base.",
    by: "Jane Doe",
    color: "black",
  },
  {
    id: 2,
    title: "Approval 3",
    avatar: "https://source.unsplash.com/800x600/?nature",
    description: "This is the third slide of the approval presentation.",
    by: "John Smith",
    color: "black",
  },
];

export const rejectedSlides: Slide[] = [
  {
    id: 0,
    title: "Rejected 1",
    avatar: "https://source.unsplash.com/800x600/?mountain",
    description: "This is the first slide of the rejected presentation.",
    by: "John Doe",
    color: "black",
  },
  {
    id: 1,
    title: "Your request has been rejected",
    avatar: "https://source.unsplash.com/800x600/?beach",
    description: "This is the rejected slide data base..",
    by: "Jane Doe",
    color: "black",
  },
  {
    id: 2,
    title: "Rejected 3",
    avatar: "https://source.unsplash.com/800x600/?forest",
    description: "This is the third slide of the rejected presentation.",
    by: "John Smith",
    color: "black",
  },
];
