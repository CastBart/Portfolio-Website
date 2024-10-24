import { ProjectDialogProps } from "../../../../../lib/definitions";

export function ProjectDialog({ isOpen, onClose, project }: ProjectDialogProps) {
  if (!isOpen) return null; // Do not render the dialog if it is closed

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-[#242424] p-6 rounded-lg w-[90%] max-w-lg h-[80vh] overflow-y-auto dialog-content">
        {/* Display the project title */}
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

        {/* Display the long description */}
        <p className="mb-4">{project.longDesc}</p>

        {/* Any additional project details */}
        <div>
          <p><strong>Short Description: </strong>{project.shotDesc}</p>
          {/* You can add more fields from the project object here */}
        </div>

        {/* Close button */}
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
