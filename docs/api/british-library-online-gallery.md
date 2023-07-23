# British Library Online Gallery

The class for scraping metadata and images from [British Library Online Gallery](https://www.bl.uk/onlinegallery/index.html).

## Usage

Create a querier for British Library Online Gallery:

```python
from libquery_extensions import BritishLibraryOnlineGallery

directory = "./output/british-library-online-gallery"
querier = BritishLibraryOnlineGallery(
    query_path=f"{directory}/queries/queries.jsonl",
    metadata_path=f"{directory}/metadata/metadata.jsonl",
    img_dir=f"{directory}/imgs",
)
```

Query metadata:

```python
base_urls = [
    "https://www.webarchive.org.uk/wayback/archive/20170611055939/http://gallery.bl.uk/viewall/default.aspx?e=Fire%20insurance%20maps%20and%20plans%20Wales",
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
    title: string
    Publisher: string
    Medium: string
    Date: string
    Scale: string
    Genre: string
    'Map scale ratio': string
    downloadUrl: string
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
