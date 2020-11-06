// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import localeString from './objects/localeString'
// document schemas
import author from './documents/author'
import category from './documents/category'
import galleryImages from './documents/galleryImages'
import post from './documents/post'
import page from './documents/page'
import siteSettings from './documents/siteSettings'
import weeklyEvents from "./documents/weeklyEvents";
import menuItem from './documents/menuItem'
import menuItemPriceOption from './objects/menuItemPriceOption'
import menuItemCategory from './documents/menuItemCategory'
import experiment from './objects/experiment'
import simpleBlockContent from './objects/simpleBlockContent'
import * as plugs from './plugs'
import plugDefaultFields from './plugs/_plugDefaultFields'
// Object types
import { instagram, videoEmbed } from './objects/embeds'
import cta from './objects/cta'
import bodyPortableText from './objects/bodyPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import link from './objects/link'
import variation from './objects/variation'
import openGraph from './objects/openGraph'
import latex from './latex'

const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) }
})

export default createSchema({
  name: 'blog',
  types: schemaTypes // Built-in types
    // Our custom types
    .concat([
      latex,
      localeString,
      variation,
      openGraph,
      experiment,
      link,
      simpleBlockContent,
      cta,
      weeklyEvents,
      siteSettings,
      menuItemPriceOption,
      menuItemCategory,
      menuItem,
      post,
      page,
      category,
      author,
      mainImage,
      authorReference,
      instagram,
      videoEmbed,
      bodyPortableText,
      excerptPortableText,
      galleryImages
    ])
    .concat(allPlugs)
})
