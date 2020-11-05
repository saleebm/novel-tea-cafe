import defaultResolve from 'part:@sanity/base/document-badges'

export default function resolveDocumentBadges(props) {
  const badges = defaultResolve(props)
  if (props.type === 'post') {
    return [...badges]
  }
  return badges
}
