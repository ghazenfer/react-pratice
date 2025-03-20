import React from 'react';

function Alert({alert}) {
  const capitalize = (word) => {
    if (!word) return "";
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    alert && (
      <div className={`alert alert-${alert.type} alert-dismissible fade show m-2`} role="alert">
        <strong>{capitalize(alert.type)}</strong>: {alert.msg}
        <button
          type="button"
          className="btn-close"
          onClick={alert.onClose} // Call parent function to close alert
          aria-label="Close"
        ></button>
      </div>
    )
  );
}

export default Alert;
