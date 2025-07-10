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
    <div className="gap-6 grid grid-cols-1 lg:grid-cols-4 px-4 w-full max-w-6xl">
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
<ProjectCard
  imageSrc="/OrderlinkLogo.png"
  modalImageSrc="/orderlink.png"
  title="OrderLink"
  text="An all in one order tracking and efficeiency management software."
  techStack={["electron", "firebase", "react"]}
  modalText="Order-Link is a desktop application for managing and tracking warehouse orders, built using Electron and the Vite + React framework. It acts as a lightweight internal dashboard that allows warehouse staff to log, monitor, and analyze order flow with live updates and searchable statistics.
Key Features:
📦 Order Tracking: Add, edit, and monitor orders with real-time status updates.
📊 Statistics Dashboard: View aggregated order data including completion rates, delays, and order types.
🔍 Search & Filter: Quickly locate specific orders using custom filters and search functionality.
🖥️ Local Database Storage: Order history and statistics are stored and queried locally for fast access.
⚡ Fast & Responsive UI: Built with Vite for near-instant load times and smooth performance."
  status="live"
  github="https://github.com/Joshieingold/Order-Link"
  website="https://example.com"

/>
<ProjectCard
  imageSrc="/ChessSharp.png"
  modalImageSrc="/chesssharppic.png"
  title="ChessSharp"
  text="A personal games database and trainer for chess"
  techStack={["csharp"]}
  modalText="ChessSharp is a desktop chess application built in C# that allows users to load and view Portable Game Notation (PGN) files. Designed with usability and rule enforcement in mind, the application ensures all piece movements follow standard chess rules, preventing illegal moves for both black and white.
Key Features:
📁 PGN File Loading: Easily import and navigate chess games from PGN files.
♟️ Legal Move Enforcement: All moves are validated to ensure they adhere to official chess rules, including turn order and piece-specific movement.
🖱️ Interactive GUI: Built using Windows Forms for a clean and responsive interface.
🔄 Turn-Based Play: Supports step-by-step game progression with automatic enforcement of white and black turn sequences."
  status="In Progress"
  github="https://github.com/Joshieingold/ChessSharp"
  website="https://example.com"

/>
<ProjectCard
  imageSrc="/GoWithFriendLogo.png"
  modalImageSrc="/gowithfriends.png"
  title="Go With Friends"
  text="An app for local games of Go."
  techStack={["javascript", "react", "html", "css"]}
  modalText="GoWithFriends is a browser-based implementation of the board game Go, designed for local two-player matches on the same device. Built entirely with JavaScript, HTML, and CSS, it offers an intuitive and minimalist interface for playing Go without needing any account, installation, or network setup.
Key Features:
⚫⚪ Two-Player Local Play: Designed for pass-and-play style games in a shared browser session.
🧠 Basic Rule Enforcement: Supports stone placement, alternating turns, and captures based on Go's traditional rules.
🖥️ Clean UI: Lightweight and responsive layout for smooth play on desktops or tablets.
🔁 Reset & Undo Options: Basic game controls for restarting or undoing moves."
  status="In Progress"
  github="https://github.com/Joshieingold/GoWithFriends"
  website="https://gowithfriends-jl.netlify.app/"
/>
    </div>
  </section>
</DefaultLayout>

  );
}
