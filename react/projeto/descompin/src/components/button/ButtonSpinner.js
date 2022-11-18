import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

export const ButtonSpinner = ({
  loading,
  label,
  loadingLabel,
  ...buttonProps
}) => {
  return (
    <Button size="sm" {...buttonProps}>
      {loading && (
        <>
          <Spinner
            as="span"
            animation="border"
            role="status"
            aria-hidden="true"
            size="sm"
          />{" "}
        </>
      )}
      {loading ? loadingLabel : label}
    </Button>
  );
};
