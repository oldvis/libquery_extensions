# Telefact

The class for scraping metadata and images from [Telefact: 1938-1945 by Pictograph Corporation](https://modley-telefact-1939-1945.tumblr.com/).

## Usage

Create a querier for Telefact:

```python
from libquery_extensions import Telefact

directory = "./output/telefact"
querier = Telefact(
    metadata_path=f"{directory}/metadata/metadata.jsonl",
    img_dir=f"{directory}/imgs",
)
```

Query metadata:

```python
base_url = "https://modley-telefact-1939-1945.tumblr.com/post/"
queries = [
    f"{base_url}616877845505064960/rudolf-modley-pictograph",
    f"{base_url}614489066195632128/rudolf-modley-pictograph-corporation",
    f"{base_url}614476957421338624/fridec231938",
]
querier.fetch_metadata(queries=queries)
```

Query images:

```python
querier.fetch_image()
```

## Metadata Schema

Each metadata entry is stored as:

```typescript
interface MetadataEntry {
    uuid: string
    /** The webpage url that generates the entry. */
    url: string
    source: 'Telefact'
    /**
     * The id of the entry in the data source.
     * Parsed from the url.
     * Generate with url.split('/')[-2]
     */
    idInSource: string
    accessDate: string
    sourceData: {
        /** The author of the visualization. */
        authors: ['Modley, Rudolf']
        /**
         * The time the visualization is published.
         * Parsed from the webpage.
         */
        publishDate: {
            year: number
            month: number
            day: number
        }
        /**
         * The url for downloading the image with get request.
         * Parsed from the webpage.
         */
        downloadUrl: string
        /** The languages use in the visualization. */
        languages: ['eng']
    }
}
```
