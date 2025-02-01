# British Library Images Online

The class for scraping metadata and images from [British Library Images Online](https://imagesonline.bl.uk).

## Usage

Create a querier for British Library Images Online:

```python
from libquery_extensions import BritishLibraryImagesOnline

directory = "./output/british-library-images-online"
querier = BritishLibraryImagesOnline(
    query_path=f"{directory}/queries/queries.jsonl",
    metadata_path=f"{directory}/metadata/metadata.jsonl",
    img_dir=f"{directory}/imgs",
)
```

Query metadata:

```python
base_urls = [
    "https://imagesonline.bl.uk/search/?searchQuery=chart",
    "https://imagesonline.bl.uk/search/?searchQuery=map",
]
querier.fetch_metadata(base_urls=base_urls)
```

Query images:

```python
querier.fetch_image()
```

## Metadata Schema

Each metadata entry is stored as:

```typescript
interface SourceData {
    assetName: string
    downloadUrl: string
    Source?: string
    Caption?: string
    'Title of Work'?: string
    Shelfmark?: string
    'Place and date of production'?: string
    Credit?: string
    'Artist/creator'?: string
    Author?: string
}

interface MetadataEntry {
    uuid: string
    url: string
    source: 'British Library'
    idInSource: string
    accessDate: string
    sourceData: SourceData
}
```
