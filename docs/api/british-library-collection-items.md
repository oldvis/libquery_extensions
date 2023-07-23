# British Library Collection Items

The class for scraping metadata and images from [British Library Collection Items](https://www.bl.uk/collection-items).

## Usage

Create a querier for British Library Collection Items:

```python
from libquery_extensions import BritishLibraryCollectionItems

directory = "./output/british-library-collection-items"
querier = BritishLibraryCollectionItems(
    query_path=f"{directory}/queries/queries.jsonl",
    metadata_path=f"{directory}/metadata/metadata.jsonl",
    img_dir=f"{directory}/imgs",
)
```

Query metadata:

```python
base_urls = ["https://www.bl.uk/collection-items?page=1"]
querier.fetch_metadata(base_urls=base_urls)
```

Query images:

```python
querier.fetch_image()
```

## Metadata Schema

Each metadata entry is stored as:

```typescript
interface Item {
    Copyright?: string
    Created?: string
    Creator?: string
    Date?: string
    Duration?: string
    Format?: string
    'Full title'?: string
    'Held by'?: string
    Language?: string
    Locations?: string
    Published?: string
    Publisher?: string
    Publishers?: string
    Shelfmark?: string
    shortDescription?: string
    Title?: string
    'Track/Part'?: string
    'Usage terms'?: string
}

interface SourceData {
    item: Item
    images?: string[]
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
