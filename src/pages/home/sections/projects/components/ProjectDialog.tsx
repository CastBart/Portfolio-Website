import { ProjectDialogProps } from "../../../../../lib/definitions";

export function ProjectDialog({
  isOpen,
  onClose,
  project,
}: ProjectDialogProps) {
  if (!isOpen) return null; // Do not render the dialog if it is closed

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-[60]"
      onClick={onClose} // Close the dialog when clicking the background
    >
      <div
        className="bg-[#242424] p-6 rounded-lg w-[90%] max-w-lg h-[80vh] overflow-y-auto dialog-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the dialog
      >
        {/* Display the project title */}
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="italic">{project.shotDesc}</p>

        {/* Display the long description */}
        <h3 className="font-bold pt-4">Description</h3>
        <p className="mb-4 whitespace-pre-line">{project.longDesc}</p>

        {/* Any additional project details */}
        <div>
          <h3 className="font-bold">Technologies</h3>
          <ul className="list-outside list-disc pl-5">
            {project.technologies.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
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
