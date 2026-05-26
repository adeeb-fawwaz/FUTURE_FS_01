import React, { useState } from 'react';

export default function Hero() {
  const [hoveredProject, setHoveredProject] = useState(null);

  // AI Core Keyphrase Matrices
  const skillsCategories = [
    { type: "Systems Programming", items: ["Java", "SQL", "ROS 2 (Robot Operating System)"] },
    { type: "Engineering Design & Modeling", items: ["SolidWorks", "AutoCAD", "Digital Twin Simulation"] }
  ];

  const educationMatrix = [
    {
      degree: "Bachelor of Engineering in Mechatronics Engineering",
      institution: "Chennai Institute of Technology",
      duration: "2023 - 2027",
      highlight: "Specialization in Industrial Automation, Robotics Kinematics, and Embedded Firmware Logic."
    }
  ];

  const projectsMatrix = [
    {
      title: "RFID-Based Smart Door Lock System",
      domain: "Embedded Systems & IoT Integration",
      scope: "Designed an automated access control security framework. Engineered custom firmware components to interface microcontrollers with physical hardware modules for secure credential verification.",
      stack: ["Embedded Firmware", "Microcontrollers", "Hardware Architecture"]
    },
    {
      title: "Robotic Kinematics & Workflow Simulation",
      domain: "Industrial Automation & Robotics",
      scope: "Modeled operational path-planning sequences and structural multi-axis mechanism behavior. Conducted process loop simulations to optimize cycle-time efficiency and material handling paths.",
      stack: ["ROS 2", "SolidWorks Design", "Automation Logic"]
    }
  ];

  // Palette Configuration: Professional Minimalist Sand & Deep Espresso
  const theme = {
    bg: '#FDFBF7',         // Pure Soft Beige
    surface: '#F4EFE6',    // Warm Sand Tone
    primaryText: '#2B1B17',// Deep Espresso Brown (Maximum Contrast for AI Parsers)
    accentText: '#6E4F42', // Warm Chestnut Brown
    divider: '#E6DFD3'     // Delicate Clay Accent Line
  };

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', backgroundColor: theme.bg, color: theme.primaryText, margin: 0, padding: 0, minHeight: '100vh', lineHeight: '1.6' }}>
      
      {/* NATIVE HIGH-PERFORMANCE ANIMATIONS */}
      <style>{`
        @keyframes customFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ai-parse-section {
          animation: customFadeUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
      `}</style>

      {/* SECTION 1: IDENTITY & CRITICAL RECRUITER CONTACTS */}
      <header className="ai-parse-section" style={{ maxWidth: '850px', margin: '0 auto', padding: '70px 20px 45px 20px', borderBottom: `1px solid ${theme.divider}`, animationDelay: '0.1s' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '22px' }}>
          
          {/* Linked Live Professional Photo */}
          <div style={{ width: '140px', height: '140px', borderRadius: '50%', border: `3px solid ${theme.accentText}`, backgroundColor: theme.surface, overflow: 'hidden', boxShadow: '0 4px 12px rgba(43,27,23,0.08)', transition: 'transform 0.4s ease' }}>
            <img 
              src="/photo.jpg" 
              alt="Adeeb Fawwaz" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                // Safe backup text if file isn't named or dragged into /public correctly yet
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-weight:700;color:${theme.accentText}">AF</div>`;
              }}
            />
          </div>

          <div>
            <h1 style={{ fontSize: '2.8rem', fontWeight: '800', color: theme.primaryText, margin: '0 0 8px 0', letterSpacing: '-1px' }}>
              Adeeb Fawwaz
            </h1>
            <p style={{ fontSize: '1.05rem', fontWeight: '700', color: theme.accentText, textTransform: 'uppercase', letterSpacing: '1.5px', margin: 0 }}>
              Mechatronics Systems Engineer & Developer
            </p>
          </div>

          {/* AI Scanner Direct Contact Array */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '25px', fontSize: '0.92rem', fontWeight: '500', color: theme.primaryText }}>
            <span>📍 19, Raja Street West</span>
            <span>📞 +91 XXXXX XXXXX</span>
            <span>✉️ fawwazadeeb@gmail.com</span>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '850px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* SECTION 2: VISION & MISSION */}
        <section className="ai-parse-section" style={{ marginBottom: '45px', animationDelay: '0.2s' }}>
          <h2 style={{ fontSize: '1.25rem', color: theme.primaryText, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '14px', borderBottom: `1px solid ${theme.primaryText}`, paddingBottom: '6px' }}>
            Vision & Mission
          </h2>
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: theme.accentText, margin: 0, fontWeight: '500', lineHeight: '1.7' }}>
            "To build unified engineering frameworks by seamlessly pairing deep physical structural modeling with scalable logic systems, delivering production-ready intelligence to the core of industrial operations."
          </p>
        </section>

        {/* SECTION 3: ABOUT ME */}
        <section className="ai-parse-section" style={{ marginBottom: '45px', animationDelay: '0.3s' }}>
          <h2 style={{ fontSize: '1.25rem', color: theme.primaryText, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '14px', borderBottom: `1px solid ${theme.primaryText}`, paddingBottom: '6px' }}>
            About Me
          </h2>
          <p style={{ margin: 0, textAlign: 'justify', fontSize: '1rem', color: theme.primaryText }}>
            I am an engineering student specializing in mechatronics engineering, focused on synthesizing robust software control stacks with precise automated physical prototypes. By maintaining expertise across structural validation environments and object-oriented runtime engines, I optimize complete automation designs for cross-functional industry mandates.
          </p>
        </section>

        {/* SECTION 4: PLACEMENT RANKED - TECHNICAL SKILLS */}
        <section className="ai-parse-section" style={{ marginBottom: '45px', animationDelay: '0.4s' }}>
          <h2 style={{ fontSize: '1.25rem', color: theme.primaryText, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '18px', borderBottom: `1px solid ${theme.primaryText}`, paddingBottom: '6px' }}>
            Technical Capabilities
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '20px' }}>
            {skillsCategories.map((cat, idx) => (
              <div key={idx} style={{ backgroundColor: theme.surface, padding: '22px', borderRadius: '6px' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: theme.primaryText, marginTop: '0', marginBottom: '14px' }}>{cat.type}</h3>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {cat.items.map((skill) => (
                    <span key={skill} style={{ backgroundColor: theme.bg, border: `1px solid ${theme.divider}`, padding: '7px 14px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '600' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: PLACEMENT RANKED - PROJECTS WORKPLACE VALIDATION */}
        <section className="ai-parse-section" style={{ marginBottom: '45px', animationDelay: '0.5s' }}>
          <h2 style={{ fontSize: '1.25rem', color: theme.primaryText, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '18px', borderBottom: `1px solid ${theme.primaryText}`, paddingBottom: '6px' }}>
            Engineering Implementations
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {projectsMatrix.map((project, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ 
                  backgroundColor: theme.surface, 
                  padding: '28px', 
                  borderRadius: '6px',
                  borderLeft: hoveredProject === idx ? `4px solid ${theme.primaryText}` : `4px solid ${theme.accentText}`,
                  transform: hoveredProject === idx ? 'translateX(5px)' : 'translateX(0)',
                  boxShadow: hoveredProject === idx ? '0 6px 16px rgba(43,27,23,0.05)' : 'none',
                  transition: 'all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'baseline', gap: '10px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: theme.primaryText, margin: 0 }}>{project.title}</h3>
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: theme.accentText, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{project.domain}</span>
                </div>
                <p style={{ fontSize: '0.96rem', margin: '14px 0 20px 0', textAlign: 'justify', color: theme.primaryText }}>{project.scope}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.stack.map((tech) => (
                    <span key={tech} style={{ backgroundColor: 'rgba(43,27,23,0.05)', color: theme.primaryText, padding: '4px 10px', borderRadius: '4px', fontSize: '0.78rem', fontWeight: '700' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: PLACEMENT RANKED - ACADEMIC BACKGROUND */}
        <section className="ai-parse-section" style={{ marginBottom: '20px', animationDelay: '0.6s' }}>
          <h2 style={{ fontSize: '1.25rem', color: theme.primaryText, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '18px', borderBottom: `1px solid ${theme.primaryText}`, paddingBottom: '6px' }}>
            Education
          </h2>
          {educationMatrix.map((edu, idx) => (
            <div key={idx} style={{ paddingLeft: '4px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'baseline', gap: '10px', marginBottom: '6px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: theme.primaryText, margin: 0 }}>{edu.degree}</h3>
                <span style={{ fontSize: '0.9rem', fontWeight: '600', color: theme.accentText }}>{edu.duration}</span>
              </div>
              <p style={{ fontSize: '1rem', color: theme.accentText, margin: '0 0 8px 0', fontWeight: '600' }}>{edu.institution}</p>
              <p style={{ fontSize: '0.95rem', margin: 0, color: theme.primaryText }}>{edu.highlight}</p>
            </div>
          ))}
        </section>

      </main>

      {/* RECRUITMENT STATUS FOOTER */}
      <footer style={{ borderTop: `1px solid ${theme.divider}`, textAlign: 'center', padding: '35px 20px', fontSize: '0.85rem', color: theme.accentText, fontWeight: '500' }}>
        © 2026 Adeeb Fawwaz. Verified Archive for Digital & Prime Recruitment Drives.
      </footer>
      
    </div>
  );
}