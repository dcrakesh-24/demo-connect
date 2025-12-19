# CSV Configuration Guide

Both Template1 and Template2 now support configuration via CSV files. All colors, logos, text, and other data can be configured through CSV files located in `public/data/`.

## CSV File Locations

- **Template1**: `public/data/template1-config.csv`
- **Template2**: `public/data/template2-config.csv`

## CSV Structure

Each CSV file follows this structure:

```csv
section,field,value,type
```

- **section**: The section of the template (e.g., `header`, `hero`, `features`)
- **field**: The specific field name (e.g., `backgroundColor`, `logoUrl`, `title`)
- **value**: The value for that field
- **type**: The data type (`string`, `color`, `number`, `boolean`)

## Configuration Fields

### Template1 Configuration

#### Header
- `logoUrl`: Logo image URL
- `backgroundColor`: Background color (hex code)
- `textColor`: Text color (hex code)

#### Hero Section
- `companyName`: Company name
- `headline`: Main headline text
- `highlightedText`: Highlighted text
- `subheadline`: Subheadline text
- `ctaButtonText`: CTA button text
- `ctaButtonLink`: CTA button link
- `backgroundColor`: Background color
- `textColor`: Text color
- `highlightedTextColor`: Color for highlighted text
- `ctaButtonColor`: CTA button background color
- `ctaButtonHoverColor`: CTA button hover color
- `graphicBackgroundImage`: Background image URL
- `companyLogo`: Company logo URL

#### Features Section
- `title`: Section title
- `backgroundColor`: Background color
- `textColor`: Text color
- `ctaButtonText`: CTA button text
- `ctaButtonLink`: CTA button link
- `item1_id` through `item6_id`: Feature IDs
- `item1_icon` through `item6_icon`: Icon identifiers
- `item1_iconColor` through `item6_iconColor`: Icon colors (Tailwind classes)
- `item1_title` through `item6_title`: Feature titles
- `item1_description` through `item6_description`: Feature descriptions

#### Case Studies Section
- `title`: Section title
- `backgroundColor`: Background color
- `textColor`: Text color
- `item1_*`: Case study fields (id, title, companyName, etc.)

#### Marketing Section
- `title`: Section title
- `subtitle`: Section subtitle
- `ctaButtonText`: CTA button text
- `ctaButtonLink`: CTA button link
- `backgroundColor`: Background color
- `textColor`: Text color
- `imageUrl`: Marketing image URL

#### Blog Section
- `title`: Section title
- `subtitle`: Section subtitle
- `backgroundColor`: Background color
- `textColor`: Text color
- `ctaButtonText`: CTA button text
- `ctaButtonLink`: CTA button link
- `post1_id` through `post6_id`: Blog post IDs
- `post1_title` through `post6_title`: Blog post titles
- `post1_description` through `post6_description`: Blog post descriptions
- `post1_imageUrl` through `post6_imageUrl`: Blog post image URLs
- `post1_readMoreLink` through `post6_readMoreLink`: Blog post links

### Template2 Configuration

#### Header
- `userName`: User's name
- `logoUrl`: Logo image URL
- `logoAlt`: Logo alt text
- `backgroundColor`: Background color
- `textColor`: Text color
- `learnMoreButtonText`: Learn More button text
- `learnMoreButtonLink`: Learn More button link
- `bookCallButtonText`: Book Call button text
- `bookCallButtonLink`: Book Call button link

#### Hero Section
- `primaryLogoUrl`: Primary logo URL
- `primaryLogoAlt`: Primary logo alt text
- `secondaryLogoUrl`: Secondary logo URL
- `secondaryLogoAlt`: Secondary logo alt text
- `greeting`: Greeting text (use `\n` for newlines)
- `description`: Description text
- `graphicImageUrl`: Hero graphic image/GIF URL
- `backgroundColor`: Background color
- `textColor`: Text color
- `greetingFontSize`: Greeting font size (e.g., "48px")
- `greetingLineHeight`: Greeting line height (e.g., "1.25")
- `greetingFontFamily`: Greeting font family
- `greetingFontWeight`: Greeting font weight

#### Useful Info Section
- `title`: Section title
- `backgroundColor`: Background color
- `textColor`: Text color
- `card1_id` through `card8_id`: Card IDs
- `card1_title` through `card8_title`: Card titles
- `card1_type` through `card8_type`: Card types
- `card1_imageUrl` through `card8_imageUrl`: Card image URLs
- `card1_label` through `card8_label`: Card labels
- `card1_icon` through `card8_icon`: Card icons

#### Video Section
- `title`: Section title
- `videoUrl`: Video embed URL
- `thumbnailUrl`: Video thumbnail URL (optional)
- `backgroundColor`: Background color
- `textColor`: Text color

#### Contact
- `name`: Contact person name
- `title`: Contact person title
- `avatarUrl`: Avatar image URL

#### Calendar Section
- `title`: Section title
- `timezone`: Timezone string
- `calendlyUrl`: Calendly URL (optional)
- `primaryLogoUrl`: Primary logo URL
- `primaryLogoAlt`: Primary logo alt text
- `secondaryLogoUrl`: Secondary logo URL
- `secondaryLogoAlt`: Secondary logo alt text
- `backgroundColor`: Background color
- `textColor`: Text color
- `containerWidth`: Container width (e.g., "70%")
- `containerMinHeight`: Container minimum height (e.g., "720px")

#### Footer
- `backgroundColor`: Background color
- `textColor`: Text color
- `borderColor`: Border color
- `copyright`: Copyright text
- `termsLink`: Terms & Conditions link
- `privacyLink`: Privacy Policy link
- `cookieLink`: Cookie Policy link
- `logoUrl`: Footer logo URL
- `logoAlt`: Footer logo alt text

## Usage

The templates automatically load data from CSV files on mount. Simply update the CSV files to change:

- Colors (background, text, buttons, etc.)
- Logos (header, footer, hero, etc.)
- Text content (titles, descriptions, etc.)
- Links and URLs
- Images and media

## Notes

- Color values should be in hex format (e.g., `#FFFFFF`, `#011A65`)
- Use `\n` in CSV values to represent newlines in text
- Icon colors for Template1 features use Tailwind CSS classes (e.g., `bg-yellow-500`)
- All URLs should be complete and accessible
- The CSV parser handles quoted fields and escaped characters

## Example

To change the hero background color in Template1, edit `public/data/template1-config.csv`:

```csv
hero,backgroundColor,#FF0000,color
```

The change will be reflected immediately after reloading the page.




