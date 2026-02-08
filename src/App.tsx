
import './App.css'

function App() {


  return (
    <>
<div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
<div className="bg-white max-w-2xl w-full rounded-2xl shadow-lg p-6">
{/* Header */}
<h1 className="text-3xl font-bold text-gray-800">Muhammad Usman</h1>
<p className="text-gray-600">Frontend Developer (React)</p>
<p className="text-sm text-gray-500 mt-1">
📧 usman@email.com | 📞 0300-0000000 | 🌍 Pakistan
</p>


{/* About */}
<section className="mt-6">
<h2 className="text-xl font-semibold text-gray-700">About Me</h2>
<p className="text-gray-600 mt-2">
Passionate frontend developer with experience in React, JavaScript,
and TypeScript. I enjoy building clean UI and user-friendly web apps.
</p>
</section>


{/* Skills */}
<section className="mt-6">
<h2 className="text-xl font-semibold text-gray-700">Skills</h2>
<ul className="list-disc list-inside text-gray-600 mt-2">
<li>React.js</li>
<li>JavaScript (ES6+)</li>
<li>TypeScript</li>
<li>HTML & CSS</li>
<li>Tailwind CSS</li>
</ul>
</section>


{/* Projects */}
<section className="mt-6">
<h2 className="text-xl font-semibold text-gray-700">Projects</h2>
<ul className="mt-2 text-gray-600">
<li>
<span className="font-medium">Weather App:</span> Live weather app
using API and location.
</li>
<li>
<span className="font-medium">Portfolio Website:</span> Personal
portfolio built with React.
</li>
</ul>
</section>


{/* Education */}
<section className="mt-6">
<h2 className="text-xl font-semibold text-gray-700">Education</h2>
<p className="text-gray-600 mt-2">Bachelor in Computer Science</p>
</section>
</div>
</div>

    </>
  )
}

export default App
