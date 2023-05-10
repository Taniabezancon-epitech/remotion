export type Activity = {
  id: number;
  title: string;
  by: string;
  description: string;
  color: string;
  avatar: string;
  isApproval?: boolean
}

export const activities: Activity[] = [
  {
    id: 0,
    title: "Initiate",
    by: "Employee",
    description: "Fill your request",
    color: "black",
    avatar:
      "https://cdn.vectorstock.com/i/preview-1x/54/48/sent-mail-icon-isolated-on-black-mail-symbol-vector-45985448.jpg",
  },
  {
    id: 1,
    title: "Approval",
    by: "Manage",
    description: "Request approval",
    color: "black",
    isApproval: true,
    avatar:
      "https://cdn.vectorstock.com/i/preview-1x/54/48/sent-mail-icon-isolated-on-black-mail-symbol-vector-45985448.jpg",
  },
  {
    id: 2,
    title: "Update HR",
    by: "HR",
    description:
      "HR update request",
    color: "black",
    avatar:
      "https://www.shutterstock.com/image-vector/pixel-perfect-editable-stroke-scalable-260nw-2255469697.jpg",
  },
  {
    id: 3,
    title: "Send rejected notification",
    by: "System",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam vestibulum mi nisl, ac tincidunt orci pretium quis. ",
    color: "black",
    avatar: "https://static.thenounproject.com/png/60886-200.png",
  },

];
