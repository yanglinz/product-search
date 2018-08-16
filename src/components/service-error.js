// @flow

import * as React from "react";

import "./service-error.css";

type ServiceErrorProps = {
  message: string
};

function ServiceError(props: ServiceErrorProps) {
  const { message } = props;
  return (
    <div className="ServiceError">
      <div className="ServiceError-icon">:(</div>

      <h2 className="ServiceError-title">Oops! Something went wrong.</h2>
      <p className="ServiceError-message">{message}</p>
    </div>
  );
}

export default ServiceError;
