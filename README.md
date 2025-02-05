# Neumorphic Card Web Component

A beautifully designed **Neumorphic Card** web component that can be easily added to your projects. It features neumorphism-inspired design elements, smooth gradients, and interactive effects, making it a perfect addition to any modern web app.

## Features
- **Neumorphism Design**: Soft shadows and smooth curves to give a modern and trendy look.
- **Customizable**: Easily customizable via attributes for size, colors, badges, and more.
- **Interactive**: Buttons with gradient effects and hover animations.
- **Compact and Elegant**: The card is small yet packed with stylish features.

## Installation

You can install the Neumorphic Card Web Component via npm:

```bash
npm install neumorphic-card-web-component
```

## Usage

To use this component in your project, follow these steps:

1. **Import the component's JavaScript file**:

```html
<script type="module" src="node_modules/neumorphic-card-web-component/neumorphic-card.js"></script>
```

2. **Use the Web Component** in your HTML:

```html
<neumorphic-card 
    width="350px" 
    height="250px" 
    background="#f4f4f9" 
    button-text="Read More" 
    button-color-start="grey" 
    button-color-end="lightgrey" 
    badge-count="7" 
    expanded="false">
    <span slot="title">Stylish Neumorphic Card</span>
    <span slot="description">This card offers a complete neumorphic design with smooth shadows, gradients, and button effects.</span>
</neumorphic-card>
```

## Component Attributes

You can customize the **Neumorphic Card** by passing the following attributes:

- **`width`**: Set the width of the card (e.g., `300px`, `100%`).
- **`height`**: Set the height of the card (e.g., `200px`).
- **`background`**: The background color of the card (e.g., `#f4f4f9`).
- **`button-text`**: The text displayed on the button (e.g., `Read More`).
- **`button-color-start`**: The starting color of the gradient button (e.g., `grey`).
- **`button-color-end`**: The ending color of the gradient button (e.g., `lightgrey`).
- **`badge-count`**: The number shown on the badge (e.g., `7`).
- **`expanded`**: Boolean (either `true` or `false`). If `true`, the card content will be expanded.
```

### Attributes Breakdown

| Attribute            | Description                                                    | Default Value |
|----------------------|----------------------------------------------------------------|---------------|
| `width`              | Width of the card (in px or %).                                | `300px`       |
| `height`             | Height of the card (in px).                                   | `200px`       |
| `background`         | Background color of the card.                                 | `#f4f4f9`     |
| `button-text`        | Text to be displayed inside the button.                        | `Read More`   |
| `button-color-start` | Starting gradient color for the button.                        | `grey`     |
| `button-color-end`   | Ending gradient color for the button.                          | `lightgrey`     |
| `badge-count`        | Number to be displayed in the badge.                           | `0`           |
| `expanded`           | Boolean attribute to control the expanded state of the card.   | `false`       |

 