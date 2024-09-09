# TrueMark Markdown Editor

## Overview

This project is a sophisticated Markdown editor developed for TrueMark, leveraging the power of [react-md-editor](https://uiwjs.github.io/react-md-editor/) and built on the [Next.js](https://nextjs.org/) framework. It offers a seamless editing experience with real-time preview and advanced formatting options.

## Features

- Real-time Markdown editing and preview
- Support for common Markdown syntax and extensions
- Responsive design for desktop and mobile use
- Dark mode support
- Frame-by-frame action logging and playback

## Technology Stack

- **Frontend**: React, Next.js
- **Styling**: Tailwind CSS
- **Markdown Editor**: react-md-editor
- **Font**: Custom Geist font (Sans and Mono variants)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/truemark-markdown-editor.git
   cd truemark-markdown-editor
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

- The main editor page is accessible at the root URL `/`.
- To view the frame-by-frame action log, navigate to `/frame-viewer`.

## Project Structure

- `src/app`: Main application pages and layouts
- `src/components`: Reusable React components
- `src/context`: React context for state management
- `public`: Static assets

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- TrueMark for the project opportunity
- The Next.js team for the excellent framework
- Contributors to react-md-editor for the core editing functionality
