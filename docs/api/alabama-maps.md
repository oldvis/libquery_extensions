# Alabama Maps

The class for scraping metadata and images from [Alabama Maps' Historical Map Archive](http://alabamamaps.ua.edu/historicalmaps/).

## Usage

Create a querier for Alabama Maps:

```python
from libquery_extensions import AlabamaMaps

directory = "./output/alabama-maps"
querier = AlabamaMaps(
    metadata_path=f"{directory}/metadata/metadata.jsonl",
    img_dir=f"{directory}/imgs",
)
```

Query metadata:

```python
base_url = "http://alabamamaps.ua.edu/historicalmaps/"
queries = [
    f"{base_url}worldwarI/index.html",
    f"{base_url}civilwar/unionroutes.html",
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
interface SourceData {
    mainAuthor: string | null
    titleDescription: string
    publicationInfo: string
    date: string
    scale: string
    originalSource: string
    viewUrl: string
    downloadUrl: string
}

interface MetadataEntry {
    uuid: string
    url: string
    source: 'Alabama Maps'
    idInSource: string
    accessDate: string
    sourceData: SourceData
}
```
