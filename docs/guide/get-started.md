# Get Started

libquery_extensions is a collection of query functions that extend [libquery](https://github.com/oldvis/libquery) for accessing metadata and images in digital libraries.

## Installation

```sh
pip install libquery_extensions
```

## Usage Example

```python
from libquery_extensions import BritishLibraryCollectionItems

querier = BritishLibraryCollectionItems(
    query_path=f"./queries.jsonl",
    metadata_path=f"./metadata.jsonl",
    img_dir=f"./imgs",
)
querier.fetch_metadata(
    base_urls=[
        "https://www.bl.uk/collection-items?page=1",
    ]
)
```

More examples can be found in the API Reference.
