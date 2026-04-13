# Terra Supply Industrial - Deployment Guide

This project is optimized for deployment as a **Static Site** on Render.com.

## Deployment Steps for Render

1.  Push your code to a GitHub/GitLab repository.
2.  On Render.com, select **New -> Static Site**.
3.  Connect your repository.
4.  Use the following settings:
    - **Build Command:** `npm install && npm run build`
    - **Publish Directory:** `dist`
5.  Render will automatically detect the `render.yaml` or `_redirects` file to handle routing.

## Global Environment Configuration
The project is configured to handle React client-side routing globally. A refresh on any page (e.g., `/packages`) will correctly redirect to the application.
