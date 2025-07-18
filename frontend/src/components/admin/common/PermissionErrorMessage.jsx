import React from 'react';

/**
 * Component to display a consistent error message for permission failures
 * @param {Object} props
 * @param {string} props.resourceType - The type of resource (e.g., 'users', 'groups')
 * @param {string} props.error - Error message from API
 * @returns {JSX.Element}
 */
const PermissionErrorMessage = ({ resourceType = 'resource', error }) => {
  return (
    <div className="rounded-md bg-yellow-50 dark:bg-yellow-900/20 p-4 mb-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-yellow-400 dark:text-yellow-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
            Permission Required
          </h3>
          <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-200">
            <p>
              You don't have permission to access this {resourceType} information.
              {error && (
                <span className="block mt-1 text-xs text-yellow-600 dark:text-yellow-300">
                  Error: {error}
                </span>
              )}
            </p>
            <p className="mt-2">
              Please contact your administrator to request access to this feature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionErrorMessage;
