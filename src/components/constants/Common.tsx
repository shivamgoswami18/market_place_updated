import { AxiosError } from "axios";
import { StatusCodes } from "http-status-codes";
import { RiSearchLine } from "react-icons/ri";
import { toast } from "react-toastify";

export const checkStatusCodeSuccess = (data: number) => {
  if (
    data === StatusCodes.OK ||
    data === StatusCodes.ACCEPTED ||
    data === StatusCodes.CREATED
  ) {
    return true;
  } else {
    return false;
  }
};

export const notFound = {
  dataNotFound: "Sorry! No Result Found",
  nullData: "--",
  notAvailable: "NA",
  somethingWrong: "Something went wrong.",
  thereIsNoDataFound: "No data found, Please try again!",
  trySearchingWithAnotherKeyword: "Try searching with another keyword!",
};

export const commonLabels = {
  confirm: "Confirm",
  submit: "Submit",
  update: "Update",
  cancel: "Cancel",
  view: "View",
  new: "New",
  edit: "Edit",
  delete: "Delete",
  remove: "Remove",
  status: "Status",
  yes: "Yes",
  no: "No",
  close: "Close",
  search: "Search",
  action: "Actions",
  enter: "Enter",
  itemsPerPage: "Items per page",
  showing: "Showing",
  of: "of",
  results: "Results",
  to: "to",
  loading: "Loading...",
  select: "Select",
  deleteConfirmation: "Do you want to delete the record?",
  na: "NA",
  true: "true",
  false: "false",
  saveNext: "Save & Next",
  areYouSureYouWantTo: "Are you sure you want to",
  success: "Success",
  completed: "completed",
  chooseImage: "Choose Image",
  token: "token",
  open: "Open",
  inProgress: "In Progress",
};

export const allowedTypes = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/gif",
  "video/mp4",
];

export const getMaxUploadFileSizeBytes = (sizeInMB: number) =>
  sizeInMB * 1024 * 1024;

export const getFileSizeMessage = (sizeInMB: number) =>
  `File size must be less than ${sizeInMB}MB.`;

export const allowedUploadFileTypes = ".pdf,.jpg,.jpeg,.png,.gif,.mp4";

export const getItem = (key: string) => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem(key);
  }
  return null;
};
export const setItem = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(key, value);
  }
};
export const clearSessionStorage = () => {
  sessionStorage.clear();
};
export const removeItem = (key: string) => {
  sessionStorage.removeItem(key);
};

export const errorHandler = (
  err: AxiosError<{ message: string | string[] }>
) => {
  const message = err.response?.data?.message;

  if (Array.isArray(message)) {
    message.forEach((msg: string) => toast.error(msg));
  } else {
    toast.error(message ?? err.message);
  }
};

export const tooltipContainer = (text: string, maxLength: number) => {
  return (
    <div
      className={
        text?.length > maxLength ? `text-dark tooltip-container` : `text-dark`
      }
    >
      <span className="tooltip-text tooltip-text-style">{text}</span>
      <div className="d-flex align-items-end text-truncate text-wrap">
        {text?.length > maxLength ? (
          <span>{text?.substring(0, maxLength)}...</span>
        ) : (
          text
        )}
      </div>
    </div>
  );
};

export const noResultFound = () => {
  return (
    <div className="py-4 text-center">
      <div>
        <span className="fs-1 text-success">
          <RiSearchLine />
        </span>
      </div>
      <div className="mt-4">
        <h5>{notFound.dataNotFound}</h5>
        <p className="text-muted">{notFound.thereIsNoDataFound}</p>
      </div>
    </div>
  );
};

export const defaultProfileImage =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
export const defaultProfileImageAlt = "Image";

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  e.currentTarget.src = defaultProfileImage;
};
