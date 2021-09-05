---
to: "<%= query_type == 'subscriptions' ? `${targetDir}/${fileName}.gql`: null %>"
---
subscription <%= name %>(

) {

}
