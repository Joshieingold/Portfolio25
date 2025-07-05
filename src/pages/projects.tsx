import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import ProjectCard from "@/components/projectCard";


export default function ProjectsPage() {
  return (
    <DefaultLayout>
  <section className="flex flex-col items-center justify-around gap-4 py-8 md:py-10 color-blue-900">
    {/* Heading with spacing */}
    <h1 className={`${title()} mb-6`}>Projects</h1>

    {/* Project grid */}
    <div className="gap-6 grid grid-cols-1 lg:grid-cols-2 px-4 w-full max-w-6xl">
<ProjectCard
  imageSrc="/Toolbox-Logo.png"
  modalImageSrc="/WarehouseToolbox.png"
  title="AutoBox 4"
  text="An all in one Warehouse Automation Tool"
  techStack={["csharp", "bash", "firebase"]}
  github="https://github.com/Joshieingold/Rogers-Toolbox-4"
  website="https://example.com"
  status="Live"
  modalText={`A versatile warehouse automation suite built with C# (XAML UI), Bash scripting, and Firebase.
📥 Open & process Excel data with flexible import options.
📈 Automate chart-based data handling & manipulation.
🖨️ Smart batch printing for physical serials based on context-aware logic.
🔍 Tools for list comparison, data formatting, and cleanup.
📊 Live database-backed stats and tracking.
⚙️ Fully customizable to fit diverse operational workflows.
Ideal for automating repetitive tasks and enhancing data-driven warehouse operations.`}
/>

    </div>
  </section>
</DefaultLayout>

  );
}
