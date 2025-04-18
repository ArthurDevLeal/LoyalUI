# Loyal UI

A modern and elegant React component library focused on simplicity, usability, and full customization. Built for developers who care about design and developer experience equally.

![LoyalUI Banner](https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-7768-61f7-bb2d-f0f98f81826b/raw?se=2025-04-18T02%3A52%3A15Z&sp=r&sv=2024-08-04&sr=b&scid=8627c799-5895-5756-9e32-3a3747bdcaea&skoid=f0c3f613-0f9b-4a8a-a29a-c1a910343ad7&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-17T20%3A29%3A33Z&ske=2025-04-18T20%3A29%3A33Z&sks=b&skv=2024-08-04&sig=0evzoHxiEPbGeMuxIbpQmV34wXwMPEKgCUnch4dZPdU%3D)



##  Features

- **Fully customizable**: Built on Tailwind CSS for easy theming and customization
- **Dark mode support**: Seamless light and dark mode switching
- **Type-safe**: Written entirely in TypeScript
- **Copy & paste**: Install components when you need them, similar to shadcn/ui approach
- **Accessible**: Built with accessibility in mind following WCAG guidelines
- **Open source**: Free for personal and commercial use

##  Components

Loyal UI provides a comprehensive set of components:

- **Foundation**: Typography, Colors, Grid
- **Inputs**: Button, TextField, Checkbox, Radio, Select, Switch
- **Layout**: Card, Container, Divider, Aspect Ratio
- **Navigation**: Tabs, Breadcrumb, Pagination, Sidebar
- **Feedback**: Alert, Toast, Progress, Spinner
- **Overlay**: Modal, Popover, Tooltip, Dialog
- **Data Display**: Table, Badge, Avatar, List
- **Advanced**: Calendar, Dropdown, Accordion, Combobox

##  Getting Started

### Prerequisites

- Node.js 16 or later
- React 18 or later
- Tailwind CSS 3 or later

### Installation

1. Start by setting up Tailwind CSS in your project

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Add the Loyal UI preset to your `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media', // or 'class' for manual control
  theme: {
    extend: {
      // Loyal UI theme extension will go here
    },
  },
  plugins: [],
}
```

3. Install the required dependencies

```bash
npm install @loyal-ui/cli
```

4. Initialize Cupertino UI in your project

```bash
npx @loyal-ui/cli init
```

5. Start adding components to your project

```bash
npx @loyal-ui/cli add button
```

##  Usage

### Simple Button Example

```jsx
import { Button } from "@/components/ui/button";

export default function MyComponent() {
  return (
    <div className="space-y-4">
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="tertiary">Tertiary Button</Button>
    </div>
  );
}
```

### Modal Example

```jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="Welcome to Loyal UI"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button variant="primary">Continue</Button>
          </>
        }
      >
        <p>This is a modal component styled according to Loyal's design guidelines.</p>
      </Modal>
    </>
  );
}
```

##  Philosophy

Loyal UI is designed with these core principles:

2. **Developer experience**: Easy to use, well documented, and with a great developer experience
3. **Performance**: Lightweight with minimal bundle size impact
4. **Accessibility**: All components meet WCAG AA standards
5. **Customization**: Easily adapt components to your brand 

##  Customization

### Theming

You can customize the default theme by extending the Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#0066CC', // Your custom primary blue
        },
        // Add more custom colors
      },
      borderRadius: {
        // Custom border radius
      },
      // More customizations...
    },
  },
}
```

### Component Customization

Each component accepts custom props for styling and behavior modifications.

##  Development

### Project Structure

```
├── components/
│   ├── ui/
│   │   ├── button/
│   │   │   ├── button.tsx
│   │   │   └── index.ts
│   │   ├── input/
│   │   └── ...
├── styles/
│   └── globals.css
├── lib/
│   └── utils.ts
└── ...
```

### Contributing

We welcome contributions! Please see our contributing guidelines for more details.

##  License

MIT License - see the [LICENSE](LICENSE) file for details.
