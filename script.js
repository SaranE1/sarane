const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');

const commands = {
  help: `Available commands:
  help        Show available commands
  whoami      Display portfolio identity
  skills      Show core skill stack
  experience  Display current role summary
  projects    Show featured project highlights
  resume      Download the resume
  clear       Clear terminal output`,
  whoami: 'Saran E — Java Developer | Software Engineer',
  skills: `Java 21 | Spring Boot | Spring Security | Spring AI | PostgreSQL | GCP | Docker | Kubernetes | Solace JMS | OpenAPI | JUnit`,
  experience: `Current Role: Java Developer at Renault Group
Focus: Building production-grade microservices, secure REST APIs, event-driven workflows, and AI-enhanced enterprise data access.`,
  projects: `Quiz Management System
- Spring Boot microservices with Eureka discovery and Feign client integration
- REST APIs for questions, quiz creation, and answer evaluation
- Enterprise workflow automation improving data synchronization and operational efficiency`,
  resume: 'Download started via the resume link in the navigation and hero section.',
};

function appendLine(content, className = '') {
  const line = document.createElement('span');
  line.className = `line ${className}`.trim();
  line.textContent = content;
  terminalOutput.appendChild(line);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function initTerminal() {
  appendLine('Welcome to Saran E\'s portfolio terminal.', 'response');
  appendLine('Type help to explore commands.', 'muted');
  appendLine('');

  terminalInput.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;

    const command = terminalInput.value.trim();
    if (!command) return;

    appendLine(`$ ${command}`, 'prompt-label');
    terminalInput.value = '';

    const normalized = command.toLowerCase();

    if (normalized === 'clear') {
      terminalOutput.innerHTML = '';
      return;
    }

    if (normalized === 'help' || normalized === 'whoami' || normalized === 'skills' || normalized === 'experience' || normalized === 'projects' || normalized === 'resume') {
      appendLine(commands[normalized], 'response');
      return;
    }

    appendLine(`Command not found: ${command}`, 'response');
    appendLine('Try: help', 'muted');
  });
}

initTerminal();

function focusTerminalOnDesktop() {
  if (window.matchMedia('(min-width: 721px)').matches) {
    terminalInput.focus();
  }
}

if (document.readyState === 'complete') {
  focusTerminalOnDesktop();
} else {
  window.addEventListener('load', focusTerminalOnDesktop);
}
