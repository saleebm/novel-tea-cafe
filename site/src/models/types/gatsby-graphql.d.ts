/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  JSON: never;
};











type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};


type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly hash: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  hash = 'hash',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp.fixed.width',
  childImageSharp___fixed___height = 'childImageSharp.fixed.height',
  childImageSharp___fixed___src = 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
  childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
  childImageSharp___gatsbyImage___imageData = 'childImageSharp.gatsbyImage.imageData',
  childImageSharp___original___width = 'childImageSharp.original.width',
  childImageSharp___original___height = 'childImageSharp.original.height',
  childImageSharp___original___src = 'childImageSharp.original.src',
  childImageSharp___resize___src = 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width = 'childImageSharp.resize.width',
  childImageSharp___resize___height = 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
  childImageSharp___id = 'childImageSharp.id',
  childImageSharp___parent___id = 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children = 'childImageSharp.parent.children',
  childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
  childImageSharp___children = 'childImageSharp.children',
  childImageSharp___children___id = 'childImageSharp.children.id',
  childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
  childImageSharp___children___children = 'childImageSharp.children.children',
  childImageSharp___children___children___id = 'childImageSharp.children.children.id',
  childImageSharp___children___children___children = 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
  childImageSharp___internal___content = 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description = 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner = 'childImageSharp.internal.owner',
  childImageSharp___internal___type = 'childImageSharp.internal.type',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

enum ImageCropFocus {
  CENTER = 0,
  NORTH = 1,
  NORTHEAST = 5,
  EAST = 2,
  SOUTHEAST = 6,
  SOUTH = 3,
  SOUTHWEST = 7,
  WEST = 4,
  NORTHWEST = 8,
  ENTROPY = 16,
  ATTENTION = 17
}

enum ImageFit {
  COVER = 'cover',
  CONTAIN = 'contain',
  FILL = 'fill',
  INSIDE = 'inside',
  OUTSIDE = 'outside'
}

enum ImageFormat {
  NO_CHANGE = '',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

enum ImageLayout {
  FIXED = 'fixed',
  FLUID = 'fluid',
  CONSTRAINED = 'constrained'
}

enum ImagePlaceholder {
  DOMINANT_COLOR = 'dominantColor',
  TRACED_SVG = 'tracedSVG',
  BASE64 = 'base64',
  NONE = 'none'
}

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ImageSharpResolutions>;
  readonly fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ImageSharpSizes>;
  readonly gatsbyImage: Maybe<ImageSharpGatsbyImage>;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_resolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_sizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageArgs = {
  layout?: Maybe<ImageLayout>;
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  placeholder: Maybe<ImagePlaceholder>;
  tracedSVGOptions: Maybe<Potrace>;
  webP?: Maybe<Scalars['Boolean']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fixed___originalName = 'fixed.originalName',
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  resolutions___originalName = 'resolutions.originalName',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  fluid___originalImg = 'fluid.originalImg',
  fluid___originalName = 'fluid.originalName',
  fluid___presentationWidth = 'fluid.presentationWidth',
  fluid___presentationHeight = 'fluid.presentationHeight',
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
  sizes___originalImg = 'sizes.originalImg',
  sizes___originalName = 'sizes.originalName',
  sizes___presentationWidth = 'sizes.presentationWidth',
  sizes___presentationHeight = 'sizes.presentationHeight',
  gatsbyImage___imageData = 'gatsbyImage.imageData',
  original___width = 'original.width',
  original___height = 'original.height',
  original___src = 'original.src',
  resize___src = 'resize.src',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  resize___originalName = 'resize.originalName',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes: Maybe<ImageSharpSizesFilterInput>;
  readonly gatsbyImage: Maybe<ImageSharpGatsbyImageFilterInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpGatsbyImage = {
  readonly imageData: Scalars['JSON'];
};

type ImageSharpGatsbyImageFilterInput = {
  readonly imageData: Maybe<JSONQueryOperatorInput>;
};

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResolutions = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResolutionsFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpSizes = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority'
}

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sanityAuthor: Maybe<SanityAuthor>;
  readonly allSanityAuthor: SanityAuthorConnection;
  readonly sanityCategory: Maybe<SanityCategory>;
  readonly allSanityCategory: SanityCategoryConnection;
  readonly sanityGalleryImages: Maybe<SanityGalleryImages>;
  readonly allSanityGalleryImages: SanityGalleryImagesConnection;
  readonly sanityMenuItem: Maybe<SanityMenuItem>;
  readonly allSanityMenuItem: SanityMenuItemConnection;
  readonly sanityMenuItemCategory: Maybe<SanityMenuItemCategory>;
  readonly allSanityMenuItemCategory: SanityMenuItemCategoryConnection;
  readonly sanityPage: Maybe<SanityPage>;
  readonly allSanityPage: SanityPageConnection;
  readonly sanityPost: Maybe<SanityPost>;
  readonly allSanityPost: SanityPostConnection;
  readonly sanityFileAsset: Maybe<SanityFileAsset>;
  readonly allSanityFileAsset: SanityFileAssetConnection;
  readonly sanityImageAsset: Maybe<SanityImageAsset>;
  readonly allSanityImageAsset: SanityImageAssetConnection;
  readonly sanitySiteSettings: Maybe<SanitySiteSettings>;
  readonly allSanitySiteSettings: SanitySiteSettingsConnection;
  readonly sanityWeeklyEvents: Maybe<SanityWeeklyEvents>;
  readonly allSanityWeeklyEvents: SanityWeeklyEventsConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly staticMap: Maybe<StaticMap>;
  readonly allStaticMap: StaticMapConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  hash: Maybe<StringQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityAuthorArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  slug: Maybe<SanitySlugFilterInput>;
  image: Maybe<SanityMainImageFilterInput>;
  bio: Maybe<SanityBlockFilterListInput>;
  _rawSlug: Maybe<JSONQueryOperatorInput>;
  _rawImage: Maybe<JSONQueryOperatorInput>;
  _rawBio: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityAuthorArgs = {
  filter: Maybe<SanityAuthorFilterInput>;
  sort: Maybe<SanityAuthorSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityCategoryArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityCategoryArgs = {
  filter: Maybe<SanityCategoryFilterInput>;
  sort: Maybe<SanityCategorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityGalleryImagesArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  heading: Maybe<StringQueryOperatorInput>;
  images: Maybe<SanityIllustrationFilterListInput>;
  _rawImages: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityGalleryImagesArgs = {
  filter: Maybe<SanityGalleryImagesFilterInput>;
  sort: Maybe<SanityGalleryImagesSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityMenuItemArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  slug: Maybe<SanitySlugFilterInput>;
  image: Maybe<SanityImageFilterInput>;
  menuItemCategory: Maybe<SanityMenuItemCategoryFilterListInput>;
  menuItemPriceOption: Maybe<SanityMenuItemPriceOptionFilterListInput>;
  _rawSlug: Maybe<JSONQueryOperatorInput>;
  _rawImage: Maybe<JSONQueryOperatorInput>;
  _rawMenuItemCategory: Maybe<JSONQueryOperatorInput>;
  _rawMenuItemPriceOption: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityMenuItemArgs = {
  filter: Maybe<SanityMenuItemFilterInput>;
  sort: Maybe<SanityMenuItemSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityMenuItemCategoryArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityMenuItemCategoryArgs = {
  filter: Maybe<SanityMenuItemCategoryFilterInput>;
  sort: Maybe<SanityMenuItemCategorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityPageArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  hero: Maybe<SanityHeroFilterInput>;
  _rawHero: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityPageArgs = {
  filter: Maybe<SanityPageFilterInput>;
  sort: Maybe<SanityPageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityPostArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<SanitySlugFilterInput>;
  publishedAt: Maybe<DateQueryOperatorInput>;
  mainImage: Maybe<SanityMainImageFilterInput>;
  authors: Maybe<SanityAuthorReferenceFilterListInput>;
  categories: Maybe<SanityCategoryFilterListInput>;
  excerpt: Maybe<SanityBlockFilterListInput>;
  body: Maybe<SanityBlockFilterListInput>;
  _rawSlug: Maybe<JSONQueryOperatorInput>;
  _rawMainImage: Maybe<JSONQueryOperatorInput>;
  _rawExcerpt: Maybe<JSONQueryOperatorInput>;
  _rawAuthors: Maybe<JSONQueryOperatorInput>;
  _rawCategories: Maybe<JSONQueryOperatorInput>;
  _rawBody: Maybe<JSONQueryOperatorInput>;
  isPublished: Maybe<BooleanQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityPostArgs = {
  filter: Maybe<SanityPostFilterInput>;
  sort: Maybe<SanityPostSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityFileAssetArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  originalFilename: Maybe<StringQueryOperatorInput>;
  label: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sha1hash: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  mimeType: Maybe<StringQueryOperatorInput>;
  size: Maybe<FloatQueryOperatorInput>;
  assetId: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  source: Maybe<SanityAssetSourceDataFilterInput>;
  _rawSource: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityFileAssetArgs = {
  filter: Maybe<SanityFileAssetFilterInput>;
  sort: Maybe<SanityFileAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityImageAssetArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  originalFilename: Maybe<StringQueryOperatorInput>;
  label: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sha1hash: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  mimeType: Maybe<StringQueryOperatorInput>;
  size: Maybe<FloatQueryOperatorInput>;
  assetId: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  metadata: Maybe<SanityImageMetadataFilterInput>;
  source: Maybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata: Maybe<JSONQueryOperatorInput>;
  _rawSource: Maybe<JSONQueryOperatorInput>;
  fixed: Maybe<SanityImageFixedFilterInput>;
  fluid: Maybe<SanityImageFluidFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
};


type Query_allSanityImageAssetArgs = {
  filter: Maybe<SanityImageAssetFilterInput>;
  sort: Maybe<SanityImageAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanitySiteSettingsArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  openGraph: Maybe<SanityOpenGraphFilterInput>;
  address: Maybe<StringQueryOperatorInput>;
  primaryColor: Maybe<SanityColorFilterInput>;
  secondaryColor: Maybe<SanityColorFilterInput>;
  facebookPage: Maybe<StringQueryOperatorInput>;
  instagramPage: Maybe<StringQueryOperatorInput>;
  twitterPage: Maybe<StringQueryOperatorInput>;
  happyHour: Maybe<SanityBlockFilterListInput>;
  _rawOpenGraph: Maybe<JSONQueryOperatorInput>;
  _rawHappyHour: Maybe<JSONQueryOperatorInput>;
  _rawPrimaryColor: Maybe<JSONQueryOperatorInput>;
  _rawSecondaryColor: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanitySiteSettingsArgs = {
  filter: Maybe<SanitySiteSettingsFilterInput>;
  sort: Maybe<SanitySiteSettingsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sanityWeeklyEventsArgs = {
  _id: Maybe<StringQueryOperatorInput>;
  _type: Maybe<StringQueryOperatorInput>;
  _createdAt: Maybe<DateQueryOperatorInput>;
  _updatedAt: Maybe<DateQueryOperatorInput>;
  _rev: Maybe<StringQueryOperatorInput>;
  _key: Maybe<StringQueryOperatorInput>;
  monday: Maybe<SanityEventDayFilterInput>;
  tuesday: Maybe<SanityEventDayFilterInput>;
  wednesday: Maybe<SanityEventDayFilterInput>;
  thursday: Maybe<SanityEventDayFilterInput>;
  friday: Maybe<SanityEventDayFilterInput>;
  saturday: Maybe<SanityEventDayFilterInput>;
  sunday: Maybe<SanityEventDayFilterInput>;
  _rawMonday: Maybe<JSONQueryOperatorInput>;
  _rawTuesday: Maybe<JSONQueryOperatorInput>;
  _rawWednesday: Maybe<JSONQueryOperatorInput>;
  _rawThursday: Maybe<JSONQueryOperatorInput>;
  _rawFriday: Maybe<JSONQueryOperatorInput>;
  _rawSaturday: Maybe<JSONQueryOperatorInput>;
  _rawSunday: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSanityWeeklyEventsArgs = {
  filter: Maybe<SanityWeeklyEventsFilterInput>;
  sort: Maybe<SanityWeeklyEventsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImage: Maybe<ImageSharpGatsbyImageFilterInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_staticMapArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  center: Maybe<StringQueryOperatorInput>;
  hash: Maybe<StringQueryOperatorInput>;
  mapUrl: Maybe<StringQueryOperatorInput>;
  nickname: Maybe<StringQueryOperatorInput>;
  childFile: Maybe<FileFilterInput>;
};


type Query_allStaticMapArgs = {
  filter: Maybe<StaticMapFilterInput>;
  sort: Maybe<StaticMapSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type SanityAssetSourceData = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type SanityAssetSourceDataFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type SanityAuthor = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly slug: Maybe<SanitySlug>;
  readonly image: Maybe<SanityMainImage>;
  readonly bio: Maybe<ReadonlyArray<Maybe<SanityBlock>>>;
  readonly _rawSlug: Maybe<Scalars['JSON']>;
  readonly _rawImage: Maybe<Scalars['JSON']>;
  readonly _rawBio: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityAuthor__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityAuthor__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityAuthor__rawSlugArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityAuthor__rawImageArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityAuthor__rawBioArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityAuthorConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityAuthorEdge>;
  readonly nodes: ReadonlyArray<SanityAuthor>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityAuthorGroupConnection>;
};


type SanityAuthorConnection_distinctArgs = {
  field: SanityAuthorFieldsEnum;
};


type SanityAuthorConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityAuthorFieldsEnum;
};

type SanityAuthorEdge = {
  readonly next: Maybe<SanityAuthor>;
  readonly node: SanityAuthor;
  readonly previous: Maybe<SanityAuthor>;
};

enum SanityAuthorFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  name = 'name',
  slug____key = 'slug._key',
  slug____type = 'slug._type',
  slug___current = 'slug.current',
  image____key = 'image._key',
  image____type = 'image._type',
  image___caption = 'image.caption',
  image___alt = 'image.alt',
  image___asset____id = 'image.asset._id',
  image___asset____type = 'image.asset._type',
  image___asset____createdAt = 'image.asset._createdAt',
  image___asset____updatedAt = 'image.asset._updatedAt',
  image___asset____rev = 'image.asset._rev',
  image___asset____key = 'image.asset._key',
  image___asset___originalFilename = 'image.asset.originalFilename',
  image___asset___label = 'image.asset.label',
  image___asset___title = 'image.asset.title',
  image___asset___description = 'image.asset.description',
  image___asset___sha1hash = 'image.asset.sha1hash',
  image___asset___extension = 'image.asset.extension',
  image___asset___mimeType = 'image.asset.mimeType',
  image___asset___size = 'image.asset.size',
  image___asset___assetId = 'image.asset.assetId',
  image___asset___path = 'image.asset.path',
  image___asset___url = 'image.asset.url',
  image___asset___metadata____key = 'image.asset.metadata._key',
  image___asset___metadata____type = 'image.asset.metadata._type',
  image___asset___metadata___lqip = 'image.asset.metadata.lqip',
  image___asset___metadata___hasAlpha = 'image.asset.metadata.hasAlpha',
  image___asset___metadata___isOpaque = 'image.asset.metadata.isOpaque',
  image___asset___metadata____rawLocation = 'image.asset.metadata._rawLocation',
  image___asset___metadata____rawDimensions = 'image.asset.metadata._rawDimensions',
  image___asset___metadata____rawPalette = 'image.asset.metadata._rawPalette',
  image___asset___source____key = 'image.asset.source._key',
  image___asset___source____type = 'image.asset.source._type',
  image___asset___source___name = 'image.asset.source.name',
  image___asset___source___id = 'image.asset.source.id',
  image___asset___source___url = 'image.asset.source.url',
  image___asset____rawMetadata = 'image.asset._rawMetadata',
  image___asset____rawSource = 'image.asset._rawSource',
  image___asset___fixed___width = 'image.asset.fixed.width',
  image___asset___fixed___height = 'image.asset.fixed.height',
  image___asset___fixed___src = 'image.asset.fixed.src',
  image___asset___fixed___srcSet = 'image.asset.fixed.srcSet',
  image___asset___fixed___base64 = 'image.asset.fixed.base64',
  image___asset___fixed___srcWebp = 'image.asset.fixed.srcWebp',
  image___asset___fixed___srcSetWebp = 'image.asset.fixed.srcSetWebp',
  image___asset___fluid___aspectRatio = 'image.asset.fluid.aspectRatio',
  image___asset___fluid___src = 'image.asset.fluid.src',
  image___asset___fluid___srcSet = 'image.asset.fluid.srcSet',
  image___asset___fluid___sizes = 'image.asset.fluid.sizes',
  image___asset___fluid___base64 = 'image.asset.fluid.base64',
  image___asset___fluid___srcWebp = 'image.asset.fluid.srcWebp',
  image___asset___fluid___srcSetWebp = 'image.asset.fluid.srcSetWebp',
  image___asset___id = 'image.asset.id',
  image___asset___parent___id = 'image.asset.parent.id',
  image___asset___parent___children = 'image.asset.parent.children',
  image___asset___children = 'image.asset.children',
  image___asset___children___id = 'image.asset.children.id',
  image___asset___children___children = 'image.asset.children.children',
  image___asset___internal___content = 'image.asset.internal.content',
  image___asset___internal___contentDigest = 'image.asset.internal.contentDigest',
  image___asset___internal___description = 'image.asset.internal.description',
  image___asset___internal___fieldOwners = 'image.asset.internal.fieldOwners',
  image___asset___internal___ignoreType = 'image.asset.internal.ignoreType',
  image___asset___internal___mediaType = 'image.asset.internal.mediaType',
  image___asset___internal___owner = 'image.asset.internal.owner',
  image___asset___internal___type = 'image.asset.internal.type',
  image___asset___childImageSharp___id = 'image.asset.childImageSharp.id',
  image___asset___childImageSharp___children = 'image.asset.childImageSharp.children',
  image___hotspot____key = 'image.hotspot._key',
  image___hotspot____type = 'image.hotspot._type',
  image___hotspot___x = 'image.hotspot.x',
  image___hotspot___y = 'image.hotspot.y',
  image___hotspot___height = 'image.hotspot.height',
  image___hotspot___width = 'image.hotspot.width',
  image___crop____key = 'image.crop._key',
  image___crop____type = 'image.crop._type',
  image___crop___top = 'image.crop.top',
  image___crop___bottom = 'image.crop.bottom',
  image___crop___left = 'image.crop.left',
  image___crop___right = 'image.crop.right',
  image____rawAsset = 'image._rawAsset',
  image____rawHotspot = 'image._rawHotspot',
  image____rawCrop = 'image._rawCrop',
  bio = 'bio',
  bio____key = 'bio._key',
  bio____type = 'bio._type',
  bio___children = 'bio.children',
  bio___children____key = 'bio.children._key',
  bio___children____type = 'bio.children._type',
  bio___children___marks = 'bio.children.marks',
  bio___children___text = 'bio.children.text',
  bio___style = 'bio.style',
  bio___list = 'bio.list',
  bio____rawChildren = 'bio._rawChildren',
  _rawSlug = '_rawSlug',
  _rawImage = '_rawImage',
  _rawBio = '_rawBio',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityAuthorFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<SanitySlugFilterInput>;
  readonly image: Maybe<SanityMainImageFilterInput>;
  readonly bio: Maybe<SanityBlockFilterListInput>;
  readonly _rawSlug: Maybe<JSONQueryOperatorInput>;
  readonly _rawImage: Maybe<JSONQueryOperatorInput>;
  readonly _rawBio: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityAuthorGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityAuthorEdge>;
  readonly nodes: ReadonlyArray<SanityAuthor>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityAuthorReference = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly author: Maybe<SanityAuthor>;
  readonly _rawAuthor: Maybe<Scalars['JSON']>;
};


type SanityAuthorReference__rawAuthorArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityAuthorReferenceFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<SanityAuthorFilterInput>;
  readonly _rawAuthor: Maybe<JSONQueryOperatorInput>;
};

type SanityAuthorReferenceFilterListInput = {
  readonly elemMatch: Maybe<SanityAuthorReferenceFilterInput>;
};

type SanityAuthorReferenceOrMathOrSpan = SanityAuthorReference | SanityMath | SanitySpan;

type SanityAuthorSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityAuthorFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanityBlock = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly children: Maybe<ReadonlyArray<Maybe<SanitySpan>>>;
  readonly style: Maybe<Scalars['String']>;
  readonly list: Maybe<Scalars['String']>;
  readonly _rawChildren: Maybe<Scalars['JSON']>;
};


type SanityBlock__rawChildrenArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityBlockFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly children: Maybe<SanitySpanFilterListInput>;
  readonly style: Maybe<StringQueryOperatorInput>;
  readonly list: Maybe<StringQueryOperatorInput>;
  readonly _rawChildren: Maybe<JSONQueryOperatorInput>;
};

type SanityBlockFilterListInput = {
  readonly elemMatch: Maybe<SanityBlockFilterInput>;
};

type SanityBlockOrInstagramOrMainImageOrMathOrVideoEmbed = SanityBlock | SanityInstagram | SanityMainImage | SanityMath | SanityVideoEmbed;

type SanityCategory = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityCategory__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityCategory__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SanityCategoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityCategoryEdge>;
  readonly nodes: ReadonlyArray<SanityCategory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityCategoryGroupConnection>;
};


type SanityCategoryConnection_distinctArgs = {
  field: SanityCategoryFieldsEnum;
};


type SanityCategoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityCategoryFieldsEnum;
};

type SanityCategoryEdge = {
  readonly next: Maybe<SanityCategory>;
  readonly node: SanityCategory;
  readonly previous: Maybe<SanityCategory>;
};

enum SanityCategoryFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  title = 'title',
  description = 'description',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityCategoryFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityCategoryFilterListInput = {
  readonly elemMatch: Maybe<SanityCategoryFilterInput>;
};

type SanityCategoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityCategoryEdge>;
  readonly nodes: ReadonlyArray<SanityCategory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityCategorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityCategoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanityCode = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly code: Maybe<Scalars['String']>;
  readonly language: Maybe<Scalars['String']>;
  readonly filename: Maybe<Scalars['String']>;
  readonly highlightedLines: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type SanityColor = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly hex: Maybe<Scalars['String']>;
  readonly alpha: Maybe<Scalars['Float']>;
  readonly hsl: Maybe<SanityHslaColor>;
  readonly hsv: Maybe<SanityHsvaColor>;
  readonly rgb: Maybe<SanityRgbaColor>;
  readonly _rawHsl: Maybe<Scalars['JSON']>;
  readonly _rawHsv: Maybe<Scalars['JSON']>;
  readonly _rawRgb: Maybe<Scalars['JSON']>;
};


type SanityColor__rawHslArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityColor__rawHsvArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityColor__rawRgbArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityColorFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly hex: Maybe<StringQueryOperatorInput>;
  readonly alpha: Maybe<FloatQueryOperatorInput>;
  readonly hsl: Maybe<SanityHslaColorFilterInput>;
  readonly hsv: Maybe<SanityHsvaColorFilterInput>;
  readonly rgb: Maybe<SanityRgbaColorFilterInput>;
  readonly _rawHsl: Maybe<JSONQueryOperatorInput>;
  readonly _rawHsv: Maybe<JSONQueryOperatorInput>;
  readonly _rawRgb: Maybe<JSONQueryOperatorInput>;
};

type SanityCta = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly route: Maybe<Scalars['String']>;
  readonly link: Maybe<Scalars['String']>;
  readonly kind: Maybe<Scalars['String']>;
};

type SanityCtaColumns = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly disabled: Maybe<Scalars['Boolean']>;
  readonly title: Maybe<Scalars['String']>;
  readonly columns: Maybe<ReadonlyArray<Maybe<SanityCtaPlug>>>;
  readonly _rawColumns: Maybe<Scalars['JSON']>;
};


type SanityCtaColumns__rawColumnsArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityCtaFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly route: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<StringQueryOperatorInput>;
  readonly kind: Maybe<StringQueryOperatorInput>;
};

type SanityCtaPlug = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly disabled: Maybe<Scalars['Boolean']>;
  readonly label: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly ctas: Maybe<ReadonlyArray<Maybe<SanityCta>>>;
  readonly body: Maybe<ReadonlyArray<Maybe<SanityBlock>>>;
  readonly _rawBody: Maybe<Scalars['JSON']>;
  readonly _rawCtas: Maybe<Scalars['JSON']>;
};


type SanityCtaPlug__rawBodyArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityCtaPlug__rawCtasArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

/** A Sanity document */
type SanityDocument = {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
};

type SanityEventDay = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly disabled: Maybe<Scalars['Boolean']>;
  readonly heading: Maybe<Scalars['String']>;
  readonly details: Maybe<Scalars['String']>;
  readonly illustration: Maybe<SanityIllustration>;
  readonly tagline: Maybe<ReadonlyArray<Maybe<SanityBlock>>>;
  readonly _rawTagline: Maybe<Scalars['JSON']>;
  readonly _rawIllustration: Maybe<Scalars['JSON']>;
};


type SanityEventDay__rawTaglineArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityEventDay__rawIllustrationArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityEventDayFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly disabled: Maybe<BooleanQueryOperatorInput>;
  readonly heading: Maybe<StringQueryOperatorInput>;
  readonly details: Maybe<StringQueryOperatorInput>;
  readonly illustration: Maybe<SanityIllustrationFilterInput>;
  readonly tagline: Maybe<SanityBlockFilterListInput>;
  readonly _rawTagline: Maybe<JSONQueryOperatorInput>;
  readonly _rawIllustration: Maybe<JSONQueryOperatorInput>;
};

type SanityExperiment = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly active: Maybe<Scalars['Boolean']>;
  readonly id: Maybe<Scalars['String']>;
  readonly variations: Maybe<ReadonlyArray<Maybe<SanityVariation>>>;
  readonly _rawVariations: Maybe<Scalars['JSON']>;
};


type SanityExperiment__rawVariationsArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityFile = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly asset: Maybe<SanityFileAsset>;
  readonly _rawAsset: Maybe<Scalars['JSON']>;
};


type SanityFile__rawAssetArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityFileAsset = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly originalFilename: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sha1hash: Maybe<Scalars['String']>;
  readonly extension: Maybe<Scalars['String']>;
  readonly mimeType: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly assetId: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly source: Maybe<SanityAssetSourceData>;
  readonly _rawSource: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityFileAsset__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityFileAsset__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityFileAsset__rawSourceArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityFileAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityFileAssetEdge>;
  readonly nodes: ReadonlyArray<SanityFileAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityFileAssetGroupConnection>;
};


type SanityFileAssetConnection_distinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


type SanityFileAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityFileAssetFieldsEnum;
};

type SanityFileAssetEdge = {
  readonly next: Maybe<SanityFileAsset>;
  readonly node: SanityFileAsset;
  readonly previous: Maybe<SanityFileAsset>;
};

enum SanityFileAssetFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  originalFilename = 'originalFilename',
  label = 'label',
  title = 'title',
  description = 'description',
  sha1hash = 'sha1hash',
  extension = 'extension',
  mimeType = 'mimeType',
  size = 'size',
  assetId = 'assetId',
  path = 'path',
  url = 'url',
  source____key = 'source._key',
  source____type = 'source._type',
  source___name = 'source.name',
  source___id = 'source.id',
  source___url = 'source.url',
  _rawSource = '_rawSource',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityFileAssetFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly originalFilename: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sha1hash: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly mimeType: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly assetId: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly source: Maybe<SanityAssetSourceDataFilterInput>;
  readonly _rawSource: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityFileAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityFileAssetEdge>;
  readonly nodes: ReadonlyArray<SanityFileAsset>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityFileAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityFileAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanityGalleryImages = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly heading: Maybe<Scalars['String']>;
  readonly images: Maybe<ReadonlyArray<Maybe<SanityIllustration>>>;
  readonly _rawImages: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityGalleryImages__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityGalleryImages__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityGalleryImages__rawImagesArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityGalleryImagesConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityGalleryImagesEdge>;
  readonly nodes: ReadonlyArray<SanityGalleryImages>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityGalleryImagesGroupConnection>;
};


type SanityGalleryImagesConnection_distinctArgs = {
  field: SanityGalleryImagesFieldsEnum;
};


type SanityGalleryImagesConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityGalleryImagesFieldsEnum;
};

type SanityGalleryImagesEdge = {
  readonly next: Maybe<SanityGalleryImages>;
  readonly node: SanityGalleryImages;
  readonly previous: Maybe<SanityGalleryImages>;
};

enum SanityGalleryImagesFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  heading = 'heading',
  images = 'images',
  images____key = 'images._key',
  images____type = 'images._type',
  images___disabled = 'images.disabled',
  images___image____key = 'images.image._key',
  images___image____type = 'images.image._type',
  images___image___caption = 'images.image.caption',
  images___image___alt = 'images.image.alt',
  images___image___asset____id = 'images.image.asset._id',
  images___image___asset____type = 'images.image.asset._type',
  images___image___asset____createdAt = 'images.image.asset._createdAt',
  images___image___asset____updatedAt = 'images.image.asset._updatedAt',
  images___image___asset____rev = 'images.image.asset._rev',
  images___image___asset____key = 'images.image.asset._key',
  images___image___asset___originalFilename = 'images.image.asset.originalFilename',
  images___image___asset___label = 'images.image.asset.label',
  images___image___asset___title = 'images.image.asset.title',
  images___image___asset___description = 'images.image.asset.description',
  images___image___asset___sha1hash = 'images.image.asset.sha1hash',
  images___image___asset___extension = 'images.image.asset.extension',
  images___image___asset___mimeType = 'images.image.asset.mimeType',
  images___image___asset___size = 'images.image.asset.size',
  images___image___asset___assetId = 'images.image.asset.assetId',
  images___image___asset___path = 'images.image.asset.path',
  images___image___asset___url = 'images.image.asset.url',
  images___image___asset____rawMetadata = 'images.image.asset._rawMetadata',
  images___image___asset____rawSource = 'images.image.asset._rawSource',
  images___image___asset___id = 'images.image.asset.id',
  images___image___asset___children = 'images.image.asset.children',
  images___image___hotspot____key = 'images.image.hotspot._key',
  images___image___hotspot____type = 'images.image.hotspot._type',
  images___image___hotspot___x = 'images.image.hotspot.x',
  images___image___hotspot___y = 'images.image.hotspot.y',
  images___image___hotspot___height = 'images.image.hotspot.height',
  images___image___hotspot___width = 'images.image.hotspot.width',
  images___image___crop____key = 'images.image.crop._key',
  images___image___crop____type = 'images.image.crop._type',
  images___image___crop___top = 'images.image.crop.top',
  images___image___crop___bottom = 'images.image.crop.bottom',
  images___image___crop___left = 'images.image.crop.left',
  images___image___crop___right = 'images.image.crop.right',
  images___image____rawAsset = 'images.image._rawAsset',
  images___image____rawHotspot = 'images.image._rawHotspot',
  images___image____rawCrop = 'images.image._rawCrop',
  images____rawImage = 'images._rawImage',
  _rawImages = '_rawImages',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityGalleryImagesFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly heading: Maybe<StringQueryOperatorInput>;
  readonly images: Maybe<SanityIllustrationFilterListInput>;
  readonly _rawImages: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityGalleryImagesGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityGalleryImagesEdge>;
  readonly nodes: ReadonlyArray<SanityGalleryImages>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityGalleryImagesSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityGalleryImagesFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanityGeopoint = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly lat: Maybe<Scalars['Float']>;
  readonly lng: Maybe<Scalars['Float']>;
  readonly alt: Maybe<Scalars['Float']>;
};

type SanityGeopointFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly lat: Maybe<FloatQueryOperatorInput>;
  readonly lng: Maybe<FloatQueryOperatorInput>;
  readonly alt: Maybe<FloatQueryOperatorInput>;
};

type SanityHero = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly disabled: Maybe<Scalars['Boolean']>;
  readonly label: Maybe<Scalars['String']>;
  readonly heading: Maybe<Scalars['String']>;
  readonly illustration: Maybe<SanityIllustration>;
  readonly cta: Maybe<SanityCta>;
  readonly tagline: Maybe<ReadonlyArray<Maybe<SanityBlock>>>;
  readonly _rawTagline: Maybe<Scalars['JSON']>;
  readonly _rawIllustration: Maybe<Scalars['JSON']>;
  readonly _rawCta: Maybe<Scalars['JSON']>;
};


type SanityHero__rawTaglineArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityHero__rawIllustrationArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityHero__rawCtaArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityHeroFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly disabled: Maybe<BooleanQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly heading: Maybe<StringQueryOperatorInput>;
  readonly illustration: Maybe<SanityIllustrationFilterInput>;
  readonly cta: Maybe<SanityCtaFilterInput>;
  readonly tagline: Maybe<SanityBlockFilterListInput>;
  readonly _rawTagline: Maybe<JSONQueryOperatorInput>;
  readonly _rawIllustration: Maybe<JSONQueryOperatorInput>;
  readonly _rawCta: Maybe<JSONQueryOperatorInput>;
};

type SanityHslaColor = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly h: Maybe<Scalars['Float']>;
  readonly s: Maybe<Scalars['Float']>;
  readonly l: Maybe<Scalars['Float']>;
  readonly a: Maybe<Scalars['Float']>;
};

type SanityHslaColorFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly h: Maybe<FloatQueryOperatorInput>;
  readonly s: Maybe<FloatQueryOperatorInput>;
  readonly l: Maybe<FloatQueryOperatorInput>;
  readonly a: Maybe<FloatQueryOperatorInput>;
};

type SanityHsvaColor = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly h: Maybe<Scalars['Float']>;
  readonly s: Maybe<Scalars['Float']>;
  readonly v: Maybe<Scalars['Float']>;
  readonly a: Maybe<Scalars['Float']>;
};

type SanityHsvaColorFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly h: Maybe<FloatQueryOperatorInput>;
  readonly s: Maybe<FloatQueryOperatorInput>;
  readonly v: Maybe<FloatQueryOperatorInput>;
  readonly a: Maybe<FloatQueryOperatorInput>;
};

type SanityIllustration = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly disabled: Maybe<Scalars['Boolean']>;
  readonly image: Maybe<SanityMainImage>;
  readonly _rawImage: Maybe<Scalars['JSON']>;
};


type SanityIllustration__rawImageArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityIllustrationFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly disabled: Maybe<BooleanQueryOperatorInput>;
  readonly image: Maybe<SanityMainImageFilterInput>;
  readonly _rawImage: Maybe<JSONQueryOperatorInput>;
};

type SanityIllustrationFilterListInput = {
  readonly elemMatch: Maybe<SanityIllustrationFilterInput>;
};

type SanityImage = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly asset: Maybe<SanityImageAsset>;
  readonly hotspot: Maybe<SanityImageHotspot>;
  readonly crop: Maybe<SanityImageCrop>;
  readonly _rawAsset: Maybe<Scalars['JSON']>;
  readonly _rawHotspot: Maybe<Scalars['JSON']>;
  readonly _rawCrop: Maybe<Scalars['JSON']>;
};


type SanityImage__rawAssetArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityImage__rawHotspotArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityImage__rawCropArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityImageAsset = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly originalFilename: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sha1hash: Maybe<Scalars['String']>;
  readonly extension: Maybe<Scalars['String']>;
  readonly mimeType: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Float']>;
  readonly assetId: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly metadata: Maybe<SanityImageMetadata>;
  readonly source: Maybe<SanityAssetSourceData>;
  readonly _rawMetadata: Maybe<Scalars['JSON']>;
  readonly _rawSource: Maybe<Scalars['JSON']>;
  readonly fixed: Maybe<SanityImageFixed>;
  readonly fluid: Maybe<SanityImageFluid>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly childImageSharp: Maybe<ImageSharp>;
};


type SanityImageAsset__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityImageAsset__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityImageAsset__rawMetadataArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityImageAsset__rawSourceArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityImageAsset_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  toFormat?: Maybe<SanityImageFormat>;
};


type SanityImageAsset_fluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  sizes: Maybe<Scalars['String']>;
  toFormat?: Maybe<SanityImageFormat>;
};

type SanityImageAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityImageAssetEdge>;
  readonly nodes: ReadonlyArray<SanityImageAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityImageAssetGroupConnection>;
};


type SanityImageAssetConnection_distinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


type SanityImageAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityImageAssetFieldsEnum;
};

type SanityImageAssetEdge = {
  readonly next: Maybe<SanityImageAsset>;
  readonly node: SanityImageAsset;
  readonly previous: Maybe<SanityImageAsset>;
};

enum SanityImageAssetFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  originalFilename = 'originalFilename',
  label = 'label',
  title = 'title',
  description = 'description',
  sha1hash = 'sha1hash',
  extension = 'extension',
  mimeType = 'mimeType',
  size = 'size',
  assetId = 'assetId',
  path = 'path',
  url = 'url',
  metadata____key = 'metadata._key',
  metadata____type = 'metadata._type',
  metadata___location____key = 'metadata.location._key',
  metadata___location____type = 'metadata.location._type',
  metadata___location___lat = 'metadata.location.lat',
  metadata___location___lng = 'metadata.location.lng',
  metadata___location___alt = 'metadata.location.alt',
  metadata___dimensions____key = 'metadata.dimensions._key',
  metadata___dimensions____type = 'metadata.dimensions._type',
  metadata___dimensions___height = 'metadata.dimensions.height',
  metadata___dimensions___width = 'metadata.dimensions.width',
  metadata___dimensions___aspectRatio = 'metadata.dimensions.aspectRatio',
  metadata___palette____key = 'metadata.palette._key',
  metadata___palette____type = 'metadata.palette._type',
  metadata___palette___darkMuted____key = 'metadata.palette.darkMuted._key',
  metadata___palette___darkMuted____type = 'metadata.palette.darkMuted._type',
  metadata___palette___darkMuted___background = 'metadata.palette.darkMuted.background',
  metadata___palette___darkMuted___foreground = 'metadata.palette.darkMuted.foreground',
  metadata___palette___darkMuted___population = 'metadata.palette.darkMuted.population',
  metadata___palette___darkMuted___title = 'metadata.palette.darkMuted.title',
  metadata___palette___lightVibrant____key = 'metadata.palette.lightVibrant._key',
  metadata___palette___lightVibrant____type = 'metadata.palette.lightVibrant._type',
  metadata___palette___lightVibrant___background = 'metadata.palette.lightVibrant.background',
  metadata___palette___lightVibrant___foreground = 'metadata.palette.lightVibrant.foreground',
  metadata___palette___lightVibrant___population = 'metadata.palette.lightVibrant.population',
  metadata___palette___lightVibrant___title = 'metadata.palette.lightVibrant.title',
  metadata___palette___darkVibrant____key = 'metadata.palette.darkVibrant._key',
  metadata___palette___darkVibrant____type = 'metadata.palette.darkVibrant._type',
  metadata___palette___darkVibrant___background = 'metadata.palette.darkVibrant.background',
  metadata___palette___darkVibrant___foreground = 'metadata.palette.darkVibrant.foreground',
  metadata___palette___darkVibrant___population = 'metadata.palette.darkVibrant.population',
  metadata___palette___darkVibrant___title = 'metadata.palette.darkVibrant.title',
  metadata___palette___vibrant____key = 'metadata.palette.vibrant._key',
  metadata___palette___vibrant____type = 'metadata.palette.vibrant._type',
  metadata___palette___vibrant___background = 'metadata.palette.vibrant.background',
  metadata___palette___vibrant___foreground = 'metadata.palette.vibrant.foreground',
  metadata___palette___vibrant___population = 'metadata.palette.vibrant.population',
  metadata___palette___vibrant___title = 'metadata.palette.vibrant.title',
  metadata___palette___dominant____key = 'metadata.palette.dominant._key',
  metadata___palette___dominant____type = 'metadata.palette.dominant._type',
  metadata___palette___dominant___background = 'metadata.palette.dominant.background',
  metadata___palette___dominant___foreground = 'metadata.palette.dominant.foreground',
  metadata___palette___dominant___population = 'metadata.palette.dominant.population',
  metadata___palette___dominant___title = 'metadata.palette.dominant.title',
  metadata___palette___lightMuted____key = 'metadata.palette.lightMuted._key',
  metadata___palette___lightMuted____type = 'metadata.palette.lightMuted._type',
  metadata___palette___lightMuted___background = 'metadata.palette.lightMuted.background',
  metadata___palette___lightMuted___foreground = 'metadata.palette.lightMuted.foreground',
  metadata___palette___lightMuted___population = 'metadata.palette.lightMuted.population',
  metadata___palette___lightMuted___title = 'metadata.palette.lightMuted.title',
  metadata___palette___muted____key = 'metadata.palette.muted._key',
  metadata___palette___muted____type = 'metadata.palette.muted._type',
  metadata___palette___muted___background = 'metadata.palette.muted.background',
  metadata___palette___muted___foreground = 'metadata.palette.muted.foreground',
  metadata___palette___muted___population = 'metadata.palette.muted.population',
  metadata___palette___muted___title = 'metadata.palette.muted.title',
  metadata___palette____rawDarkMuted = 'metadata.palette._rawDarkMuted',
  metadata___palette____rawLightVibrant = 'metadata.palette._rawLightVibrant',
  metadata___palette____rawDarkVibrant = 'metadata.palette._rawDarkVibrant',
  metadata___palette____rawVibrant = 'metadata.palette._rawVibrant',
  metadata___palette____rawDominant = 'metadata.palette._rawDominant',
  metadata___palette____rawLightMuted = 'metadata.palette._rawLightMuted',
  metadata___palette____rawMuted = 'metadata.palette._rawMuted',
  metadata___lqip = 'metadata.lqip',
  metadata___hasAlpha = 'metadata.hasAlpha',
  metadata___isOpaque = 'metadata.isOpaque',
  metadata____rawLocation = 'metadata._rawLocation',
  metadata____rawDimensions = 'metadata._rawDimensions',
  metadata____rawPalette = 'metadata._rawPalette',
  source____key = 'source._key',
  source____type = 'source._type',
  source___name = 'source.name',
  source___id = 'source.id',
  source___url = 'source.url',
  _rawMetadata = '_rawMetadata',
  _rawSource = '_rawSource',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___base64 = 'fixed.base64',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___sizes = 'fluid.sizes',
  fluid___base64 = 'fluid.base64',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp.fixed.width',
  childImageSharp___fixed___height = 'childImageSharp.fixed.height',
  childImageSharp___fixed___src = 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
  childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
  childImageSharp___gatsbyImage___imageData = 'childImageSharp.gatsbyImage.imageData',
  childImageSharp___original___width = 'childImageSharp.original.width',
  childImageSharp___original___height = 'childImageSharp.original.height',
  childImageSharp___original___src = 'childImageSharp.original.src',
  childImageSharp___resize___src = 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width = 'childImageSharp.resize.width',
  childImageSharp___resize___height = 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
  childImageSharp___id = 'childImageSharp.id',
  childImageSharp___parent___id = 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children = 'childImageSharp.parent.children',
  childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
  childImageSharp___children = 'childImageSharp.children',
  childImageSharp___children___id = 'childImageSharp.children.id',
  childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
  childImageSharp___children___children = 'childImageSharp.children.children',
  childImageSharp___children___children___id = 'childImageSharp.children.children.id',
  childImageSharp___children___children___children = 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
  childImageSharp___internal___content = 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description = 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner = 'childImageSharp.internal.owner',
  childImageSharp___internal___type = 'childImageSharp.internal.type'
}

type SanityImageAssetFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly originalFilename: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sha1hash: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly mimeType: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<FloatQueryOperatorInput>;
  readonly assetId: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly metadata: Maybe<SanityImageMetadataFilterInput>;
  readonly source: Maybe<SanityAssetSourceDataFilterInput>;
  readonly _rawMetadata: Maybe<JSONQueryOperatorInput>;
  readonly _rawSource: Maybe<JSONQueryOperatorInput>;
  readonly fixed: Maybe<SanityImageFixedFilterInput>;
  readonly fluid: Maybe<SanityImageFluidFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
};

type SanityImageAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityImageAssetEdge>;
  readonly nodes: ReadonlyArray<SanityImageAsset>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityImageAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityImageAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanityImageCrop = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly top: Maybe<Scalars['Float']>;
  readonly bottom: Maybe<Scalars['Float']>;
  readonly left: Maybe<Scalars['Float']>;
  readonly right: Maybe<Scalars['Float']>;
};

type SanityImageCropFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly top: Maybe<FloatQueryOperatorInput>;
  readonly bottom: Maybe<FloatQueryOperatorInput>;
  readonly left: Maybe<FloatQueryOperatorInput>;
  readonly right: Maybe<FloatQueryOperatorInput>;
};

type SanityImageDimensions = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Float']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
};

type SanityImageDimensionsFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type SanityImageFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly asset: Maybe<SanityImageAssetFilterInput>;
  readonly hotspot: Maybe<SanityImageHotspotFilterInput>;
  readonly crop: Maybe<SanityImageCropFilterInput>;
  readonly _rawAsset: Maybe<JSONQueryOperatorInput>;
  readonly _rawHotspot: Maybe<JSONQueryOperatorInput>;
  readonly _rawCrop: Maybe<JSONQueryOperatorInput>;
};

type SanityImageFixed = {
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly base64: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
};

type SanityImageFixedFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
};

type SanityImageFluid = {
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly sizes: Scalars['String'];
  readonly base64: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
};

type SanityImageFluidFilterInput = {
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
};

enum SanityImageFormat {
  NO_CHANGE = '',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

type SanityImageHotspot = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly x: Maybe<Scalars['Float']>;
  readonly y: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly width: Maybe<Scalars['Float']>;
};

type SanityImageHotspotFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly x: Maybe<FloatQueryOperatorInput>;
  readonly y: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
};

type SanityImageMetadata = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly location: Maybe<SanityGeopoint>;
  readonly dimensions: Maybe<SanityImageDimensions>;
  readonly palette: Maybe<SanityImagePalette>;
  readonly lqip: Maybe<Scalars['String']>;
  readonly hasAlpha: Maybe<Scalars['Boolean']>;
  readonly isOpaque: Maybe<Scalars['Boolean']>;
  readonly _rawLocation: Maybe<Scalars['JSON']>;
  readonly _rawDimensions: Maybe<Scalars['JSON']>;
  readonly _rawPalette: Maybe<Scalars['JSON']>;
};


type SanityImageMetadata__rawLocationArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityImageMetadata__rawDimensionsArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityImageMetadata__rawPaletteArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityImageMetadataFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly location: Maybe<SanityGeopointFilterInput>;
  readonly dimensions: Maybe<SanityImageDimensionsFilterInput>;
  readonly palette: Maybe<SanityImagePaletteFilterInput>;
  readonly lqip: Maybe<StringQueryOperatorInput>;
  readonly hasAlpha: Maybe<BooleanQueryOperatorInput>;
  readonly isOpaque: Maybe<BooleanQueryOperatorInput>;
  readonly _rawLocation: Maybe<JSONQueryOperatorInput>;
  readonly _rawDimensions: Maybe<JSONQueryOperatorInput>;
  readonly _rawPalette: Maybe<JSONQueryOperatorInput>;
};

type SanityImagePalette = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly darkMuted: Maybe<SanityImagePaletteSwatch>;
  readonly lightVibrant: Maybe<SanityImagePaletteSwatch>;
  readonly darkVibrant: Maybe<SanityImagePaletteSwatch>;
  readonly vibrant: Maybe<SanityImagePaletteSwatch>;
  readonly dominant: Maybe<SanityImagePaletteSwatch>;
  readonly lightMuted: Maybe<SanityImagePaletteSwatch>;
  readonly muted: Maybe<SanityImagePaletteSwatch>;
  readonly _rawDarkMuted: Maybe<Scalars['JSON']>;
  readonly _rawLightVibrant: Maybe<Scalars['JSON']>;
  readonly _rawDarkVibrant: Maybe<Scalars['JSON']>;
  readonly _rawVibrant: Maybe<Scalars['JSON']>;
  readonly _rawDominant: Maybe<Scalars['JSON']>;
  readonly _rawLightMuted: Maybe<Scalars['JSON']>;
  readonly _rawMuted: Maybe<Scalars['JSON']>;
};


type SanityImagePalette__rawDarkMutedArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityImagePalette__rawLightVibrantArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityImagePalette__rawDarkVibrantArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityImagePalette__rawVibrantArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityImagePalette__rawDominantArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityImagePalette__rawLightMutedArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityImagePalette__rawMutedArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityImagePaletteFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly darkMuted: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly lightVibrant: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly darkVibrant: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly vibrant: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly dominant: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly lightMuted: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly muted: Maybe<SanityImagePaletteSwatchFilterInput>;
  readonly _rawDarkMuted: Maybe<JSONQueryOperatorInput>;
  readonly _rawLightVibrant: Maybe<JSONQueryOperatorInput>;
  readonly _rawDarkVibrant: Maybe<JSONQueryOperatorInput>;
  readonly _rawVibrant: Maybe<JSONQueryOperatorInput>;
  readonly _rawDominant: Maybe<JSONQueryOperatorInput>;
  readonly _rawLightMuted: Maybe<JSONQueryOperatorInput>;
  readonly _rawMuted: Maybe<JSONQueryOperatorInput>;
};

type SanityImagePaletteSwatch = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
  readonly foreground: Maybe<Scalars['String']>;
  readonly population: Maybe<Scalars['Float']>;
  readonly title: Maybe<Scalars['String']>;
};

type SanityImagePaletteSwatchFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly background: Maybe<StringQueryOperatorInput>;
  readonly foreground: Maybe<StringQueryOperatorInput>;
  readonly population: Maybe<FloatQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
};

type SanityInfoRows = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly disabled: Maybe<Scalars['Boolean']>;
  readonly title: Maybe<Scalars['String']>;
  readonly rows: Maybe<ReadonlyArray<Maybe<SanityTextWithIllustration>>>;
  readonly _rawRows: Maybe<Scalars['JSON']>;
};


type SanityInfoRows__rawRowsArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityInstagram = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type SanityLink = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly href: Maybe<Scalars['String']>;
};

type SanityLocaleString = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly en: Maybe<Scalars['String']>;
  readonly es: Maybe<Scalars['String']>;
  readonly nb: Maybe<Scalars['String']>;
  readonly sv: Maybe<Scalars['String']>;
};

type SanityMainImage = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly caption: Maybe<Scalars['String']>;
  readonly alt: Maybe<Scalars['String']>;
  readonly asset: Maybe<SanityImageAsset>;
  readonly hotspot: Maybe<SanityImageHotspot>;
  readonly crop: Maybe<SanityImageCrop>;
  readonly _rawAsset: Maybe<Scalars['JSON']>;
  readonly _rawHotspot: Maybe<Scalars['JSON']>;
  readonly _rawCrop: Maybe<Scalars['JSON']>;
};


type SanityMainImage__rawAssetArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityMainImage__rawHotspotArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityMainImage__rawCropArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityMainImageFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly caption: Maybe<StringQueryOperatorInput>;
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly asset: Maybe<SanityImageAssetFilterInput>;
  readonly hotspot: Maybe<SanityImageHotspotFilterInput>;
  readonly crop: Maybe<SanityImageCropFilterInput>;
  readonly _rawAsset: Maybe<JSONQueryOperatorInput>;
  readonly _rawHotspot: Maybe<JSONQueryOperatorInput>;
  readonly _rawCrop: Maybe<JSONQueryOperatorInput>;
};

type SanityMath = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly latex: Maybe<Scalars['String']>;
};

type SanityMenuItem = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly slug: Maybe<SanitySlug>;
  readonly image: Maybe<SanityImage>;
  readonly menuItemCategory: Maybe<ReadonlyArray<Maybe<SanityMenuItemCategory>>>;
  readonly menuItemPriceOption: Maybe<ReadonlyArray<Maybe<SanityMenuItemPriceOption>>>;
  readonly _rawSlug: Maybe<Scalars['JSON']>;
  readonly _rawImage: Maybe<Scalars['JSON']>;
  readonly _rawMenuItemCategory: Maybe<Scalars['JSON']>;
  readonly _rawMenuItemPriceOption: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityMenuItem__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityMenuItem__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityMenuItem__rawSlugArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityMenuItem__rawImageArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityMenuItem__rawMenuItemCategoryArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityMenuItem__rawMenuItemPriceOptionArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityMenuItemCategory = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityMenuItemCategory__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityMenuItemCategory__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SanityMenuItemCategoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityMenuItemCategoryEdge>;
  readonly nodes: ReadonlyArray<SanityMenuItemCategory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityMenuItemCategoryGroupConnection>;
};


type SanityMenuItemCategoryConnection_distinctArgs = {
  field: SanityMenuItemCategoryFieldsEnum;
};


type SanityMenuItemCategoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityMenuItemCategoryFieldsEnum;
};

type SanityMenuItemCategoryEdge = {
  readonly next: Maybe<SanityMenuItemCategory>;
  readonly node: SanityMenuItemCategory;
  readonly previous: Maybe<SanityMenuItemCategory>;
};

enum SanityMenuItemCategoryFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  title = 'title',
  description = 'description',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityMenuItemCategoryFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityMenuItemCategoryFilterListInput = {
  readonly elemMatch: Maybe<SanityMenuItemCategoryFilterInput>;
};

type SanityMenuItemCategoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityMenuItemCategoryEdge>;
  readonly nodes: ReadonlyArray<SanityMenuItemCategory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityMenuItemCategorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityMenuItemCategoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanityMenuItemConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityMenuItemEdge>;
  readonly nodes: ReadonlyArray<SanityMenuItem>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityMenuItemGroupConnection>;
};


type SanityMenuItemConnection_distinctArgs = {
  field: SanityMenuItemFieldsEnum;
};


type SanityMenuItemConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityMenuItemFieldsEnum;
};

type SanityMenuItemEdge = {
  readonly next: Maybe<SanityMenuItem>;
  readonly node: SanityMenuItem;
  readonly previous: Maybe<SanityMenuItem>;
};

enum SanityMenuItemFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  name = 'name',
  description = 'description',
  slug____key = 'slug._key',
  slug____type = 'slug._type',
  slug___current = 'slug.current',
  image____key = 'image._key',
  image____type = 'image._type',
  image___asset____id = 'image.asset._id',
  image___asset____type = 'image.asset._type',
  image___asset____createdAt = 'image.asset._createdAt',
  image___asset____updatedAt = 'image.asset._updatedAt',
  image___asset____rev = 'image.asset._rev',
  image___asset____key = 'image.asset._key',
  image___asset___originalFilename = 'image.asset.originalFilename',
  image___asset___label = 'image.asset.label',
  image___asset___title = 'image.asset.title',
  image___asset___description = 'image.asset.description',
  image___asset___sha1hash = 'image.asset.sha1hash',
  image___asset___extension = 'image.asset.extension',
  image___asset___mimeType = 'image.asset.mimeType',
  image___asset___size = 'image.asset.size',
  image___asset___assetId = 'image.asset.assetId',
  image___asset___path = 'image.asset.path',
  image___asset___url = 'image.asset.url',
  image___asset___metadata____key = 'image.asset.metadata._key',
  image___asset___metadata____type = 'image.asset.metadata._type',
  image___asset___metadata___lqip = 'image.asset.metadata.lqip',
  image___asset___metadata___hasAlpha = 'image.asset.metadata.hasAlpha',
  image___asset___metadata___isOpaque = 'image.asset.metadata.isOpaque',
  image___asset___metadata____rawLocation = 'image.asset.metadata._rawLocation',
  image___asset___metadata____rawDimensions = 'image.asset.metadata._rawDimensions',
  image___asset___metadata____rawPalette = 'image.asset.metadata._rawPalette',
  image___asset___source____key = 'image.asset.source._key',
  image___asset___source____type = 'image.asset.source._type',
  image___asset___source___name = 'image.asset.source.name',
  image___asset___source___id = 'image.asset.source.id',
  image___asset___source___url = 'image.asset.source.url',
  image___asset____rawMetadata = 'image.asset._rawMetadata',
  image___asset____rawSource = 'image.asset._rawSource',
  image___asset___fixed___width = 'image.asset.fixed.width',
  image___asset___fixed___height = 'image.asset.fixed.height',
  image___asset___fixed___src = 'image.asset.fixed.src',
  image___asset___fixed___srcSet = 'image.asset.fixed.srcSet',
  image___asset___fixed___base64 = 'image.asset.fixed.base64',
  image___asset___fixed___srcWebp = 'image.asset.fixed.srcWebp',
  image___asset___fixed___srcSetWebp = 'image.asset.fixed.srcSetWebp',
  image___asset___fluid___aspectRatio = 'image.asset.fluid.aspectRatio',
  image___asset___fluid___src = 'image.asset.fluid.src',
  image___asset___fluid___srcSet = 'image.asset.fluid.srcSet',
  image___asset___fluid___sizes = 'image.asset.fluid.sizes',
  image___asset___fluid___base64 = 'image.asset.fluid.base64',
  image___asset___fluid___srcWebp = 'image.asset.fluid.srcWebp',
  image___asset___fluid___srcSetWebp = 'image.asset.fluid.srcSetWebp',
  image___asset___id = 'image.asset.id',
  image___asset___parent___id = 'image.asset.parent.id',
  image___asset___parent___children = 'image.asset.parent.children',
  image___asset___children = 'image.asset.children',
  image___asset___children___id = 'image.asset.children.id',
  image___asset___children___children = 'image.asset.children.children',
  image___asset___internal___content = 'image.asset.internal.content',
  image___asset___internal___contentDigest = 'image.asset.internal.contentDigest',
  image___asset___internal___description = 'image.asset.internal.description',
  image___asset___internal___fieldOwners = 'image.asset.internal.fieldOwners',
  image___asset___internal___ignoreType = 'image.asset.internal.ignoreType',
  image___asset___internal___mediaType = 'image.asset.internal.mediaType',
  image___asset___internal___owner = 'image.asset.internal.owner',
  image___asset___internal___type = 'image.asset.internal.type',
  image___asset___childImageSharp___id = 'image.asset.childImageSharp.id',
  image___asset___childImageSharp___children = 'image.asset.childImageSharp.children',
  image___hotspot____key = 'image.hotspot._key',
  image___hotspot____type = 'image.hotspot._type',
  image___hotspot___x = 'image.hotspot.x',
  image___hotspot___y = 'image.hotspot.y',
  image___hotspot___height = 'image.hotspot.height',
  image___hotspot___width = 'image.hotspot.width',
  image___crop____key = 'image.crop._key',
  image___crop____type = 'image.crop._type',
  image___crop___top = 'image.crop.top',
  image___crop___bottom = 'image.crop.bottom',
  image___crop___left = 'image.crop.left',
  image___crop___right = 'image.crop.right',
  image____rawAsset = 'image._rawAsset',
  image____rawHotspot = 'image._rawHotspot',
  image____rawCrop = 'image._rawCrop',
  menuItemCategory = 'menuItemCategory',
  menuItemCategory____id = 'menuItemCategory._id',
  menuItemCategory____type = 'menuItemCategory._type',
  menuItemCategory____createdAt = 'menuItemCategory._createdAt',
  menuItemCategory____updatedAt = 'menuItemCategory._updatedAt',
  menuItemCategory____rev = 'menuItemCategory._rev',
  menuItemCategory____key = 'menuItemCategory._key',
  menuItemCategory___title = 'menuItemCategory.title',
  menuItemCategory___description = 'menuItemCategory.description',
  menuItemCategory___id = 'menuItemCategory.id',
  menuItemCategory___parent___id = 'menuItemCategory.parent.id',
  menuItemCategory___parent___parent___id = 'menuItemCategory.parent.parent.id',
  menuItemCategory___parent___parent___children = 'menuItemCategory.parent.parent.children',
  menuItemCategory___parent___children = 'menuItemCategory.parent.children',
  menuItemCategory___parent___children___id = 'menuItemCategory.parent.children.id',
  menuItemCategory___parent___children___children = 'menuItemCategory.parent.children.children',
  menuItemCategory___parent___internal___content = 'menuItemCategory.parent.internal.content',
  menuItemCategory___parent___internal___contentDigest = 'menuItemCategory.parent.internal.contentDigest',
  menuItemCategory___parent___internal___description = 'menuItemCategory.parent.internal.description',
  menuItemCategory___parent___internal___fieldOwners = 'menuItemCategory.parent.internal.fieldOwners',
  menuItemCategory___parent___internal___ignoreType = 'menuItemCategory.parent.internal.ignoreType',
  menuItemCategory___parent___internal___mediaType = 'menuItemCategory.parent.internal.mediaType',
  menuItemCategory___parent___internal___owner = 'menuItemCategory.parent.internal.owner',
  menuItemCategory___parent___internal___type = 'menuItemCategory.parent.internal.type',
  menuItemCategory___children = 'menuItemCategory.children',
  menuItemCategory___children___id = 'menuItemCategory.children.id',
  menuItemCategory___children___parent___id = 'menuItemCategory.children.parent.id',
  menuItemCategory___children___parent___children = 'menuItemCategory.children.parent.children',
  menuItemCategory___children___children = 'menuItemCategory.children.children',
  menuItemCategory___children___children___id = 'menuItemCategory.children.children.id',
  menuItemCategory___children___children___children = 'menuItemCategory.children.children.children',
  menuItemCategory___children___internal___content = 'menuItemCategory.children.internal.content',
  menuItemCategory___children___internal___contentDigest = 'menuItemCategory.children.internal.contentDigest',
  menuItemCategory___children___internal___description = 'menuItemCategory.children.internal.description',
  menuItemCategory___children___internal___fieldOwners = 'menuItemCategory.children.internal.fieldOwners',
  menuItemCategory___children___internal___ignoreType = 'menuItemCategory.children.internal.ignoreType',
  menuItemCategory___children___internal___mediaType = 'menuItemCategory.children.internal.mediaType',
  menuItemCategory___children___internal___owner = 'menuItemCategory.children.internal.owner',
  menuItemCategory___children___internal___type = 'menuItemCategory.children.internal.type',
  menuItemCategory___internal___content = 'menuItemCategory.internal.content',
  menuItemCategory___internal___contentDigest = 'menuItemCategory.internal.contentDigest',
  menuItemCategory___internal___description = 'menuItemCategory.internal.description',
  menuItemCategory___internal___fieldOwners = 'menuItemCategory.internal.fieldOwners',
  menuItemCategory___internal___ignoreType = 'menuItemCategory.internal.ignoreType',
  menuItemCategory___internal___mediaType = 'menuItemCategory.internal.mediaType',
  menuItemCategory___internal___owner = 'menuItemCategory.internal.owner',
  menuItemCategory___internal___type = 'menuItemCategory.internal.type',
  menuItemPriceOption = 'menuItemPriceOption',
  menuItemPriceOption____key = 'menuItemPriceOption._key',
  menuItemPriceOption____type = 'menuItemPriceOption._type',
  menuItemPriceOption___variant = 'menuItemPriceOption.variant',
  menuItemPriceOption___price = 'menuItemPriceOption.price',
  _rawSlug = '_rawSlug',
  _rawImage = '_rawImage',
  _rawMenuItemCategory = '_rawMenuItemCategory',
  _rawMenuItemPriceOption = '_rawMenuItemPriceOption',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityMenuItemFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<SanitySlugFilterInput>;
  readonly image: Maybe<SanityImageFilterInput>;
  readonly menuItemCategory: Maybe<SanityMenuItemCategoryFilterListInput>;
  readonly menuItemPriceOption: Maybe<SanityMenuItemPriceOptionFilterListInput>;
  readonly _rawSlug: Maybe<JSONQueryOperatorInput>;
  readonly _rawImage: Maybe<JSONQueryOperatorInput>;
  readonly _rawMenuItemCategory: Maybe<JSONQueryOperatorInput>;
  readonly _rawMenuItemPriceOption: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityMenuItemGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityMenuItemEdge>;
  readonly nodes: ReadonlyArray<SanityMenuItem>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityMenuItemPriceOption = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly variant: Maybe<Scalars['String']>;
  readonly price: Maybe<Scalars['Float']>;
};

type SanityMenuItemPriceOptionFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly variant: Maybe<StringQueryOperatorInput>;
  readonly price: Maybe<FloatQueryOperatorInput>;
};

type SanityMenuItemPriceOptionFilterListInput = {
  readonly elemMatch: Maybe<SanityMenuItemPriceOptionFilterInput>;
};

type SanityMenuItemSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityMenuItemFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanityMuxVideo = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly asset: Maybe<SanityMuxVideoAsset>;
  readonly _rawAsset: Maybe<Scalars['JSON']>;
};


type SanityMuxVideo__rawAssetArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityMuxVideoAsset = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly status: Maybe<Scalars['String']>;
  readonly assetId: Maybe<Scalars['String']>;
  readonly playbackId: Maybe<Scalars['String']>;
  readonly filename: Maybe<Scalars['String']>;
  readonly thumbTime: Maybe<Scalars['Float']>;
};

type SanityOpenGraph = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly image: Maybe<SanityMainImage>;
  readonly _rawImage: Maybe<Scalars['JSON']>;
};


type SanityOpenGraph__rawImageArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityOpenGraphFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<SanityMainImageFilterInput>;
  readonly _rawImage: Maybe<JSONQueryOperatorInput>;
};

type SanityPage = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly hero: Maybe<SanityHero>;
  readonly _rawHero: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityPage__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityPage__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityPage__rawHeroArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityPageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityPageEdge>;
  readonly nodes: ReadonlyArray<SanityPage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityPageGroupConnection>;
};


type SanityPageConnection_distinctArgs = {
  field: SanityPageFieldsEnum;
};


type SanityPageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityPageFieldsEnum;
};

type SanityPageEdge = {
  readonly next: Maybe<SanityPage>;
  readonly node: SanityPage;
  readonly previous: Maybe<SanityPage>;
};

enum SanityPageFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  title = 'title',
  hero____key = 'hero._key',
  hero____type = 'hero._type',
  hero___disabled = 'hero.disabled',
  hero___label = 'hero.label',
  hero___heading = 'hero.heading',
  hero___illustration____key = 'hero.illustration._key',
  hero___illustration____type = 'hero.illustration._type',
  hero___illustration___disabled = 'hero.illustration.disabled',
  hero___illustration___image____key = 'hero.illustration.image._key',
  hero___illustration___image____type = 'hero.illustration.image._type',
  hero___illustration___image___caption = 'hero.illustration.image.caption',
  hero___illustration___image___alt = 'hero.illustration.image.alt',
  hero___illustration___image____rawAsset = 'hero.illustration.image._rawAsset',
  hero___illustration___image____rawHotspot = 'hero.illustration.image._rawHotspot',
  hero___illustration___image____rawCrop = 'hero.illustration.image._rawCrop',
  hero___illustration____rawImage = 'hero.illustration._rawImage',
  hero___cta____key = 'hero.cta._key',
  hero___cta____type = 'hero.cta._type',
  hero___cta___title = 'hero.cta.title',
  hero___cta___route = 'hero.cta.route',
  hero___cta___link = 'hero.cta.link',
  hero___cta___kind = 'hero.cta.kind',
  hero___tagline = 'hero.tagline',
  hero___tagline____key = 'hero.tagline._key',
  hero___tagline____type = 'hero.tagline._type',
  hero___tagline___children = 'hero.tagline.children',
  hero___tagline___children____key = 'hero.tagline.children._key',
  hero___tagline___children____type = 'hero.tagline.children._type',
  hero___tagline___children___marks = 'hero.tagline.children.marks',
  hero___tagline___children___text = 'hero.tagline.children.text',
  hero___tagline___style = 'hero.tagline.style',
  hero___tagline___list = 'hero.tagline.list',
  hero___tagline____rawChildren = 'hero.tagline._rawChildren',
  hero____rawTagline = 'hero._rawTagline',
  hero____rawIllustration = 'hero._rawIllustration',
  hero____rawCta = 'hero._rawCta',
  _rawHero = '_rawHero',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityPageFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly hero: Maybe<SanityHeroFilterInput>;
  readonly _rawHero: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityPageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityPageEdge>;
  readonly nodes: ReadonlyArray<SanityPage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityPageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityPageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanityPost = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<SanitySlug>;
  readonly publishedAt: Maybe<Scalars['Date']>;
  readonly mainImage: Maybe<SanityMainImage>;
  readonly authors: Maybe<ReadonlyArray<Maybe<SanityAuthorReference>>>;
  readonly categories: Maybe<ReadonlyArray<Maybe<SanityCategory>>>;
  readonly excerpt: Maybe<ReadonlyArray<Maybe<SanityBlock>>>;
  readonly body: Maybe<ReadonlyArray<Maybe<SanityBlock>>>;
  readonly _rawSlug: Maybe<Scalars['JSON']>;
  readonly _rawMainImage: Maybe<Scalars['JSON']>;
  readonly _rawExcerpt: Maybe<Scalars['JSON']>;
  readonly _rawAuthors: Maybe<Scalars['JSON']>;
  readonly _rawCategories: Maybe<Scalars['JSON']>;
  readonly _rawBody: Maybe<Scalars['JSON']>;
  readonly isPublished: Scalars['Boolean'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityPost__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityPost__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityPost_publishedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityPost__rawSlugArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityPost__rawMainImageArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityPost__rawExcerptArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityPost__rawAuthorsArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityPost__rawCategoriesArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityPost__rawBodyArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityPostEdge>;
  readonly nodes: ReadonlyArray<SanityPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityPostGroupConnection>;
};


type SanityPostConnection_distinctArgs = {
  field: SanityPostFieldsEnum;
};


type SanityPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityPostFieldsEnum;
};

type SanityPostEdge = {
  readonly next: Maybe<SanityPost>;
  readonly node: SanityPost;
  readonly previous: Maybe<SanityPost>;
};

enum SanityPostFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  title = 'title',
  slug____key = 'slug._key',
  slug____type = 'slug._type',
  slug___current = 'slug.current',
  publishedAt = 'publishedAt',
  mainImage____key = 'mainImage._key',
  mainImage____type = 'mainImage._type',
  mainImage___caption = 'mainImage.caption',
  mainImage___alt = 'mainImage.alt',
  mainImage___asset____id = 'mainImage.asset._id',
  mainImage___asset____type = 'mainImage.asset._type',
  mainImage___asset____createdAt = 'mainImage.asset._createdAt',
  mainImage___asset____updatedAt = 'mainImage.asset._updatedAt',
  mainImage___asset____rev = 'mainImage.asset._rev',
  mainImage___asset____key = 'mainImage.asset._key',
  mainImage___asset___originalFilename = 'mainImage.asset.originalFilename',
  mainImage___asset___label = 'mainImage.asset.label',
  mainImage___asset___title = 'mainImage.asset.title',
  mainImage___asset___description = 'mainImage.asset.description',
  mainImage___asset___sha1hash = 'mainImage.asset.sha1hash',
  mainImage___asset___extension = 'mainImage.asset.extension',
  mainImage___asset___mimeType = 'mainImage.asset.mimeType',
  mainImage___asset___size = 'mainImage.asset.size',
  mainImage___asset___assetId = 'mainImage.asset.assetId',
  mainImage___asset___path = 'mainImage.asset.path',
  mainImage___asset___url = 'mainImage.asset.url',
  mainImage___asset___metadata____key = 'mainImage.asset.metadata._key',
  mainImage___asset___metadata____type = 'mainImage.asset.metadata._type',
  mainImage___asset___metadata___lqip = 'mainImage.asset.metadata.lqip',
  mainImage___asset___metadata___hasAlpha = 'mainImage.asset.metadata.hasAlpha',
  mainImage___asset___metadata___isOpaque = 'mainImage.asset.metadata.isOpaque',
  mainImage___asset___metadata____rawLocation = 'mainImage.asset.metadata._rawLocation',
  mainImage___asset___metadata____rawDimensions = 'mainImage.asset.metadata._rawDimensions',
  mainImage___asset___metadata____rawPalette = 'mainImage.asset.metadata._rawPalette',
  mainImage___asset___source____key = 'mainImage.asset.source._key',
  mainImage___asset___source____type = 'mainImage.asset.source._type',
  mainImage___asset___source___name = 'mainImage.asset.source.name',
  mainImage___asset___source___id = 'mainImage.asset.source.id',
  mainImage___asset___source___url = 'mainImage.asset.source.url',
  mainImage___asset____rawMetadata = 'mainImage.asset._rawMetadata',
  mainImage___asset____rawSource = 'mainImage.asset._rawSource',
  mainImage___asset___fixed___width = 'mainImage.asset.fixed.width',
  mainImage___asset___fixed___height = 'mainImage.asset.fixed.height',
  mainImage___asset___fixed___src = 'mainImage.asset.fixed.src',
  mainImage___asset___fixed___srcSet = 'mainImage.asset.fixed.srcSet',
  mainImage___asset___fixed___base64 = 'mainImage.asset.fixed.base64',
  mainImage___asset___fixed___srcWebp = 'mainImage.asset.fixed.srcWebp',
  mainImage___asset___fixed___srcSetWebp = 'mainImage.asset.fixed.srcSetWebp',
  mainImage___asset___fluid___aspectRatio = 'mainImage.asset.fluid.aspectRatio',
  mainImage___asset___fluid___src = 'mainImage.asset.fluid.src',
  mainImage___asset___fluid___srcSet = 'mainImage.asset.fluid.srcSet',
  mainImage___asset___fluid___sizes = 'mainImage.asset.fluid.sizes',
  mainImage___asset___fluid___base64 = 'mainImage.asset.fluid.base64',
  mainImage___asset___fluid___srcWebp = 'mainImage.asset.fluid.srcWebp',
  mainImage___asset___fluid___srcSetWebp = 'mainImage.asset.fluid.srcSetWebp',
  mainImage___asset___id = 'mainImage.asset.id',
  mainImage___asset___parent___id = 'mainImage.asset.parent.id',
  mainImage___asset___parent___children = 'mainImage.asset.parent.children',
  mainImage___asset___children = 'mainImage.asset.children',
  mainImage___asset___children___id = 'mainImage.asset.children.id',
  mainImage___asset___children___children = 'mainImage.asset.children.children',
  mainImage___asset___internal___content = 'mainImage.asset.internal.content',
  mainImage___asset___internal___contentDigest = 'mainImage.asset.internal.contentDigest',
  mainImage___asset___internal___description = 'mainImage.asset.internal.description',
  mainImage___asset___internal___fieldOwners = 'mainImage.asset.internal.fieldOwners',
  mainImage___asset___internal___ignoreType = 'mainImage.asset.internal.ignoreType',
  mainImage___asset___internal___mediaType = 'mainImage.asset.internal.mediaType',
  mainImage___asset___internal___owner = 'mainImage.asset.internal.owner',
  mainImage___asset___internal___type = 'mainImage.asset.internal.type',
  mainImage___asset___childImageSharp___id = 'mainImage.asset.childImageSharp.id',
  mainImage___asset___childImageSharp___children = 'mainImage.asset.childImageSharp.children',
  mainImage___hotspot____key = 'mainImage.hotspot._key',
  mainImage___hotspot____type = 'mainImage.hotspot._type',
  mainImage___hotspot___x = 'mainImage.hotspot.x',
  mainImage___hotspot___y = 'mainImage.hotspot.y',
  mainImage___hotspot___height = 'mainImage.hotspot.height',
  mainImage___hotspot___width = 'mainImage.hotspot.width',
  mainImage___crop____key = 'mainImage.crop._key',
  mainImage___crop____type = 'mainImage.crop._type',
  mainImage___crop___top = 'mainImage.crop.top',
  mainImage___crop___bottom = 'mainImage.crop.bottom',
  mainImage___crop___left = 'mainImage.crop.left',
  mainImage___crop___right = 'mainImage.crop.right',
  mainImage____rawAsset = 'mainImage._rawAsset',
  mainImage____rawHotspot = 'mainImage._rawHotspot',
  mainImage____rawCrop = 'mainImage._rawCrop',
  authors = 'authors',
  authors____key = 'authors._key',
  authors____type = 'authors._type',
  authors___author____id = 'authors.author._id',
  authors___author____type = 'authors.author._type',
  authors___author____createdAt = 'authors.author._createdAt',
  authors___author____updatedAt = 'authors.author._updatedAt',
  authors___author____rev = 'authors.author._rev',
  authors___author____key = 'authors.author._key',
  authors___author___name = 'authors.author.name',
  authors___author___slug____key = 'authors.author.slug._key',
  authors___author___slug____type = 'authors.author.slug._type',
  authors___author___slug___current = 'authors.author.slug.current',
  authors___author___image____key = 'authors.author.image._key',
  authors___author___image____type = 'authors.author.image._type',
  authors___author___image___caption = 'authors.author.image.caption',
  authors___author___image___alt = 'authors.author.image.alt',
  authors___author___image____rawAsset = 'authors.author.image._rawAsset',
  authors___author___image____rawHotspot = 'authors.author.image._rawHotspot',
  authors___author___image____rawCrop = 'authors.author.image._rawCrop',
  authors___author___bio = 'authors.author.bio',
  authors___author___bio____key = 'authors.author.bio._key',
  authors___author___bio____type = 'authors.author.bio._type',
  authors___author___bio___children = 'authors.author.bio.children',
  authors___author___bio___style = 'authors.author.bio.style',
  authors___author___bio___list = 'authors.author.bio.list',
  authors___author___bio____rawChildren = 'authors.author.bio._rawChildren',
  authors___author____rawSlug = 'authors.author._rawSlug',
  authors___author____rawImage = 'authors.author._rawImage',
  authors___author____rawBio = 'authors.author._rawBio',
  authors___author___id = 'authors.author.id',
  authors___author___parent___id = 'authors.author.parent.id',
  authors___author___parent___children = 'authors.author.parent.children',
  authors___author___children = 'authors.author.children',
  authors___author___children___id = 'authors.author.children.id',
  authors___author___children___children = 'authors.author.children.children',
  authors___author___internal___content = 'authors.author.internal.content',
  authors___author___internal___contentDigest = 'authors.author.internal.contentDigest',
  authors___author___internal___description = 'authors.author.internal.description',
  authors___author___internal___fieldOwners = 'authors.author.internal.fieldOwners',
  authors___author___internal___ignoreType = 'authors.author.internal.ignoreType',
  authors___author___internal___mediaType = 'authors.author.internal.mediaType',
  authors___author___internal___owner = 'authors.author.internal.owner',
  authors___author___internal___type = 'authors.author.internal.type',
  authors____rawAuthor = 'authors._rawAuthor',
  categories = 'categories',
  categories____id = 'categories._id',
  categories____type = 'categories._type',
  categories____createdAt = 'categories._createdAt',
  categories____updatedAt = 'categories._updatedAt',
  categories____rev = 'categories._rev',
  categories____key = 'categories._key',
  categories___title = 'categories.title',
  categories___description = 'categories.description',
  categories___id = 'categories.id',
  categories___parent___id = 'categories.parent.id',
  categories___parent___parent___id = 'categories.parent.parent.id',
  categories___parent___parent___children = 'categories.parent.parent.children',
  categories___parent___children = 'categories.parent.children',
  categories___parent___children___id = 'categories.parent.children.id',
  categories___parent___children___children = 'categories.parent.children.children',
  categories___parent___internal___content = 'categories.parent.internal.content',
  categories___parent___internal___contentDigest = 'categories.parent.internal.contentDigest',
  categories___parent___internal___description = 'categories.parent.internal.description',
  categories___parent___internal___fieldOwners = 'categories.parent.internal.fieldOwners',
  categories___parent___internal___ignoreType = 'categories.parent.internal.ignoreType',
  categories___parent___internal___mediaType = 'categories.parent.internal.mediaType',
  categories___parent___internal___owner = 'categories.parent.internal.owner',
  categories___parent___internal___type = 'categories.parent.internal.type',
  categories___children = 'categories.children',
  categories___children___id = 'categories.children.id',
  categories___children___parent___id = 'categories.children.parent.id',
  categories___children___parent___children = 'categories.children.parent.children',
  categories___children___children = 'categories.children.children',
  categories___children___children___id = 'categories.children.children.id',
  categories___children___children___children = 'categories.children.children.children',
  categories___children___internal___content = 'categories.children.internal.content',
  categories___children___internal___contentDigest = 'categories.children.internal.contentDigest',
  categories___children___internal___description = 'categories.children.internal.description',
  categories___children___internal___fieldOwners = 'categories.children.internal.fieldOwners',
  categories___children___internal___ignoreType = 'categories.children.internal.ignoreType',
  categories___children___internal___mediaType = 'categories.children.internal.mediaType',
  categories___children___internal___owner = 'categories.children.internal.owner',
  categories___children___internal___type = 'categories.children.internal.type',
  categories___internal___content = 'categories.internal.content',
  categories___internal___contentDigest = 'categories.internal.contentDigest',
  categories___internal___description = 'categories.internal.description',
  categories___internal___fieldOwners = 'categories.internal.fieldOwners',
  categories___internal___ignoreType = 'categories.internal.ignoreType',
  categories___internal___mediaType = 'categories.internal.mediaType',
  categories___internal___owner = 'categories.internal.owner',
  categories___internal___type = 'categories.internal.type',
  excerpt = 'excerpt',
  excerpt____key = 'excerpt._key',
  excerpt____type = 'excerpt._type',
  excerpt___children = 'excerpt.children',
  excerpt___children____key = 'excerpt.children._key',
  excerpt___children____type = 'excerpt.children._type',
  excerpt___children___marks = 'excerpt.children.marks',
  excerpt___children___text = 'excerpt.children.text',
  excerpt___style = 'excerpt.style',
  excerpt___list = 'excerpt.list',
  excerpt____rawChildren = 'excerpt._rawChildren',
  body = 'body',
  body____key = 'body._key',
  body____type = 'body._type',
  body___children = 'body.children',
  body___children____key = 'body.children._key',
  body___children____type = 'body.children._type',
  body___children___marks = 'body.children.marks',
  body___children___text = 'body.children.text',
  body___style = 'body.style',
  body___list = 'body.list',
  body____rawChildren = 'body._rawChildren',
  _rawSlug = '_rawSlug',
  _rawMainImage = '_rawMainImage',
  _rawExcerpt = '_rawExcerpt',
  _rawAuthors = '_rawAuthors',
  _rawCategories = '_rawCategories',
  _rawBody = '_rawBody',
  isPublished = 'isPublished',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityPostFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<SanitySlugFilterInput>;
  readonly publishedAt: Maybe<DateQueryOperatorInput>;
  readonly mainImage: Maybe<SanityMainImageFilterInput>;
  readonly authors: Maybe<SanityAuthorReferenceFilterListInput>;
  readonly categories: Maybe<SanityCategoryFilterListInput>;
  readonly excerpt: Maybe<SanityBlockFilterListInput>;
  readonly body: Maybe<SanityBlockFilterListInput>;
  readonly _rawSlug: Maybe<JSONQueryOperatorInput>;
  readonly _rawMainImage: Maybe<JSONQueryOperatorInput>;
  readonly _rawExcerpt: Maybe<JSONQueryOperatorInput>;
  readonly _rawAuthors: Maybe<JSONQueryOperatorInput>;
  readonly _rawCategories: Maybe<JSONQueryOperatorInput>;
  readonly _rawBody: Maybe<JSONQueryOperatorInput>;
  readonly isPublished: Maybe<BooleanQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityPostEdge>;
  readonly nodes: ReadonlyArray<SanityPost>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanityPricing = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly disabled: Maybe<Scalars['Boolean']>;
  readonly title: Maybe<Scalars['String']>;
  readonly transparentCTAs: Maybe<Scalars['Boolean']>;
};

type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  readonly maxDepth: Scalars['Int'];
};

type SanityRgbaColor = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly r: Maybe<Scalars['Float']>;
  readonly g: Maybe<Scalars['Float']>;
  readonly b: Maybe<Scalars['Float']>;
  readonly a: Maybe<Scalars['Float']>;
};

type SanityRgbaColorFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly r: Maybe<FloatQueryOperatorInput>;
  readonly g: Maybe<FloatQueryOperatorInput>;
  readonly b: Maybe<FloatQueryOperatorInput>;
  readonly a: Maybe<FloatQueryOperatorInput>;
};

type SanitySiteSettings = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly openGraph: Maybe<SanityOpenGraph>;
  readonly address: Maybe<Scalars['String']>;
  readonly primaryColor: Maybe<SanityColor>;
  readonly secondaryColor: Maybe<SanityColor>;
  readonly facebookPage: Maybe<Scalars['String']>;
  readonly instagramPage: Maybe<Scalars['String']>;
  readonly twitterPage: Maybe<Scalars['String']>;
  readonly happyHour: Maybe<ReadonlyArray<Maybe<SanityBlock>>>;
  readonly _rawOpenGraph: Maybe<Scalars['JSON']>;
  readonly _rawHappyHour: Maybe<Scalars['JSON']>;
  readonly _rawPrimaryColor: Maybe<Scalars['JSON']>;
  readonly _rawSecondaryColor: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanitySiteSettings__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanitySiteSettings__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanitySiteSettings__rawOpenGraphArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanitySiteSettings__rawHappyHourArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanitySiteSettings__rawPrimaryColorArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanitySiteSettings__rawSecondaryColorArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanitySiteSettingsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanitySiteSettingsEdge>;
  readonly nodes: ReadonlyArray<SanitySiteSettings>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanitySiteSettingsGroupConnection>;
};


type SanitySiteSettingsConnection_distinctArgs = {
  field: SanitySiteSettingsFieldsEnum;
};


type SanitySiteSettingsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanitySiteSettingsFieldsEnum;
};

type SanitySiteSettingsEdge = {
  readonly next: Maybe<SanitySiteSettings>;
  readonly node: SanitySiteSettings;
  readonly previous: Maybe<SanitySiteSettings>;
};

enum SanitySiteSettingsFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  openGraph____key = 'openGraph._key',
  openGraph____type = 'openGraph._type',
  openGraph___title = 'openGraph.title',
  openGraph___description = 'openGraph.description',
  openGraph___image____key = 'openGraph.image._key',
  openGraph___image____type = 'openGraph.image._type',
  openGraph___image___caption = 'openGraph.image.caption',
  openGraph___image___alt = 'openGraph.image.alt',
  openGraph___image___asset____id = 'openGraph.image.asset._id',
  openGraph___image___asset____type = 'openGraph.image.asset._type',
  openGraph___image___asset____createdAt = 'openGraph.image.asset._createdAt',
  openGraph___image___asset____updatedAt = 'openGraph.image.asset._updatedAt',
  openGraph___image___asset____rev = 'openGraph.image.asset._rev',
  openGraph___image___asset____key = 'openGraph.image.asset._key',
  openGraph___image___asset___originalFilename = 'openGraph.image.asset.originalFilename',
  openGraph___image___asset___label = 'openGraph.image.asset.label',
  openGraph___image___asset___title = 'openGraph.image.asset.title',
  openGraph___image___asset___description = 'openGraph.image.asset.description',
  openGraph___image___asset___sha1hash = 'openGraph.image.asset.sha1hash',
  openGraph___image___asset___extension = 'openGraph.image.asset.extension',
  openGraph___image___asset___mimeType = 'openGraph.image.asset.mimeType',
  openGraph___image___asset___size = 'openGraph.image.asset.size',
  openGraph___image___asset___assetId = 'openGraph.image.asset.assetId',
  openGraph___image___asset___path = 'openGraph.image.asset.path',
  openGraph___image___asset___url = 'openGraph.image.asset.url',
  openGraph___image___asset____rawMetadata = 'openGraph.image.asset._rawMetadata',
  openGraph___image___asset____rawSource = 'openGraph.image.asset._rawSource',
  openGraph___image___asset___id = 'openGraph.image.asset.id',
  openGraph___image___asset___children = 'openGraph.image.asset.children',
  openGraph___image___hotspot____key = 'openGraph.image.hotspot._key',
  openGraph___image___hotspot____type = 'openGraph.image.hotspot._type',
  openGraph___image___hotspot___x = 'openGraph.image.hotspot.x',
  openGraph___image___hotspot___y = 'openGraph.image.hotspot.y',
  openGraph___image___hotspot___height = 'openGraph.image.hotspot.height',
  openGraph___image___hotspot___width = 'openGraph.image.hotspot.width',
  openGraph___image___crop____key = 'openGraph.image.crop._key',
  openGraph___image___crop____type = 'openGraph.image.crop._type',
  openGraph___image___crop___top = 'openGraph.image.crop.top',
  openGraph___image___crop___bottom = 'openGraph.image.crop.bottom',
  openGraph___image___crop___left = 'openGraph.image.crop.left',
  openGraph___image___crop___right = 'openGraph.image.crop.right',
  openGraph___image____rawAsset = 'openGraph.image._rawAsset',
  openGraph___image____rawHotspot = 'openGraph.image._rawHotspot',
  openGraph___image____rawCrop = 'openGraph.image._rawCrop',
  openGraph____rawImage = 'openGraph._rawImage',
  address = 'address',
  primaryColor____key = 'primaryColor._key',
  primaryColor____type = 'primaryColor._type',
  primaryColor___hex = 'primaryColor.hex',
  primaryColor___alpha = 'primaryColor.alpha',
  primaryColor___hsl____key = 'primaryColor.hsl._key',
  primaryColor___hsl____type = 'primaryColor.hsl._type',
  primaryColor___hsl___h = 'primaryColor.hsl.h',
  primaryColor___hsl___s = 'primaryColor.hsl.s',
  primaryColor___hsl___l = 'primaryColor.hsl.l',
  primaryColor___hsl___a = 'primaryColor.hsl.a',
  primaryColor___hsv____key = 'primaryColor.hsv._key',
  primaryColor___hsv____type = 'primaryColor.hsv._type',
  primaryColor___hsv___h = 'primaryColor.hsv.h',
  primaryColor___hsv___s = 'primaryColor.hsv.s',
  primaryColor___hsv___v = 'primaryColor.hsv.v',
  primaryColor___hsv___a = 'primaryColor.hsv.a',
  primaryColor___rgb____key = 'primaryColor.rgb._key',
  primaryColor___rgb____type = 'primaryColor.rgb._type',
  primaryColor___rgb___r = 'primaryColor.rgb.r',
  primaryColor___rgb___g = 'primaryColor.rgb.g',
  primaryColor___rgb___b = 'primaryColor.rgb.b',
  primaryColor___rgb___a = 'primaryColor.rgb.a',
  primaryColor____rawHsl = 'primaryColor._rawHsl',
  primaryColor____rawHsv = 'primaryColor._rawHsv',
  primaryColor____rawRgb = 'primaryColor._rawRgb',
  secondaryColor____key = 'secondaryColor._key',
  secondaryColor____type = 'secondaryColor._type',
  secondaryColor___hex = 'secondaryColor.hex',
  secondaryColor___alpha = 'secondaryColor.alpha',
  secondaryColor___hsl____key = 'secondaryColor.hsl._key',
  secondaryColor___hsl____type = 'secondaryColor.hsl._type',
  secondaryColor___hsl___h = 'secondaryColor.hsl.h',
  secondaryColor___hsl___s = 'secondaryColor.hsl.s',
  secondaryColor___hsl___l = 'secondaryColor.hsl.l',
  secondaryColor___hsl___a = 'secondaryColor.hsl.a',
  secondaryColor___hsv____key = 'secondaryColor.hsv._key',
  secondaryColor___hsv____type = 'secondaryColor.hsv._type',
  secondaryColor___hsv___h = 'secondaryColor.hsv.h',
  secondaryColor___hsv___s = 'secondaryColor.hsv.s',
  secondaryColor___hsv___v = 'secondaryColor.hsv.v',
  secondaryColor___hsv___a = 'secondaryColor.hsv.a',
  secondaryColor___rgb____key = 'secondaryColor.rgb._key',
  secondaryColor___rgb____type = 'secondaryColor.rgb._type',
  secondaryColor___rgb___r = 'secondaryColor.rgb.r',
  secondaryColor___rgb___g = 'secondaryColor.rgb.g',
  secondaryColor___rgb___b = 'secondaryColor.rgb.b',
  secondaryColor___rgb___a = 'secondaryColor.rgb.a',
  secondaryColor____rawHsl = 'secondaryColor._rawHsl',
  secondaryColor____rawHsv = 'secondaryColor._rawHsv',
  secondaryColor____rawRgb = 'secondaryColor._rawRgb',
  facebookPage = 'facebookPage',
  instagramPage = 'instagramPage',
  twitterPage = 'twitterPage',
  happyHour = 'happyHour',
  happyHour____key = 'happyHour._key',
  happyHour____type = 'happyHour._type',
  happyHour___children = 'happyHour.children',
  happyHour___children____key = 'happyHour.children._key',
  happyHour___children____type = 'happyHour.children._type',
  happyHour___children___marks = 'happyHour.children.marks',
  happyHour___children___text = 'happyHour.children.text',
  happyHour___style = 'happyHour.style',
  happyHour___list = 'happyHour.list',
  happyHour____rawChildren = 'happyHour._rawChildren',
  _rawOpenGraph = '_rawOpenGraph',
  _rawHappyHour = '_rawHappyHour',
  _rawPrimaryColor = '_rawPrimaryColor',
  _rawSecondaryColor = '_rawSecondaryColor',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanitySiteSettingsFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly openGraph: Maybe<SanityOpenGraphFilterInput>;
  readonly address: Maybe<StringQueryOperatorInput>;
  readonly primaryColor: Maybe<SanityColorFilterInput>;
  readonly secondaryColor: Maybe<SanityColorFilterInput>;
  readonly facebookPage: Maybe<StringQueryOperatorInput>;
  readonly instagramPage: Maybe<StringQueryOperatorInput>;
  readonly twitterPage: Maybe<StringQueryOperatorInput>;
  readonly happyHour: Maybe<SanityBlockFilterListInput>;
  readonly _rawOpenGraph: Maybe<JSONQueryOperatorInput>;
  readonly _rawHappyHour: Maybe<JSONQueryOperatorInput>;
  readonly _rawPrimaryColor: Maybe<JSONQueryOperatorInput>;
  readonly _rawSecondaryColor: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanitySiteSettingsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanitySiteSettingsEdge>;
  readonly nodes: ReadonlyArray<SanitySiteSettings>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanitySiteSettingsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanitySiteSettingsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SanitySlug = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly current: Maybe<Scalars['String']>;
};

type SanitySlugFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly current: Maybe<StringQueryOperatorInput>;
};

type SanitySpan = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly marks: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly text: Maybe<Scalars['String']>;
};

type SanitySpanFilterInput = {
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly marks: Maybe<StringQueryOperatorInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
};

type SanitySpanFilterListInput = {
  readonly elemMatch: Maybe<SanitySpanFilterInput>;
};

type SanityTextWithIllustration = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly disabled: Maybe<Scalars['Boolean']>;
  readonly title: Maybe<Scalars['String']>;
  readonly illustration: Maybe<SanityIllustration>;
  readonly text: Maybe<ReadonlyArray<Maybe<SanityBlock>>>;
  readonly _rawText: Maybe<Scalars['JSON']>;
  readonly _rawIllustration: Maybe<Scalars['JSON']>;
};


type SanityTextWithIllustration__rawTextArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityTextWithIllustration__rawIllustrationArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityUiComponentRef = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly disabled: Maybe<Scalars['Boolean']>;
  readonly name: Maybe<Scalars['String']>;
};

type SanityVariation = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly variationId: Maybe<Scalars['String']>;
  readonly percentage: Maybe<Scalars['Float']>;
  readonly page: Maybe<SanityPage>;
  readonly _rawPage: Maybe<Scalars['JSON']>;
};


type SanityVariation__rawPageArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityVideoEmbed = {
  readonly _key: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type SanityWeeklyEvents = SanityDocument & Node & {
  readonly _id: Maybe<Scalars['String']>;
  readonly _type: Maybe<Scalars['String']>;
  readonly _createdAt: Maybe<Scalars['Date']>;
  readonly _updatedAt: Maybe<Scalars['Date']>;
  readonly _rev: Maybe<Scalars['String']>;
  readonly _key: Maybe<Scalars['String']>;
  readonly monday: Maybe<SanityEventDay>;
  readonly tuesday: Maybe<SanityEventDay>;
  readonly wednesday: Maybe<SanityEventDay>;
  readonly thursday: Maybe<SanityEventDay>;
  readonly friday: Maybe<SanityEventDay>;
  readonly saturday: Maybe<SanityEventDay>;
  readonly sunday: Maybe<SanityEventDay>;
  readonly _rawMonday: Maybe<Scalars['JSON']>;
  readonly _rawTuesday: Maybe<Scalars['JSON']>;
  readonly _rawWednesday: Maybe<Scalars['JSON']>;
  readonly _rawThursday: Maybe<Scalars['JSON']>;
  readonly _rawFriday: Maybe<Scalars['JSON']>;
  readonly _rawSaturday: Maybe<Scalars['JSON']>;
  readonly _rawSunday: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SanityWeeklyEvents__createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityWeeklyEvents__updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type SanityWeeklyEvents__rawMondayArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityWeeklyEvents__rawTuesdayArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityWeeklyEvents__rawWednesdayArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityWeeklyEvents__rawThursdayArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityWeeklyEvents__rawFridayArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityWeeklyEvents__rawSaturdayArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};


type SanityWeeklyEvents__rawSundayArgs = {
  resolveReferences: Maybe<SanityResolveReferencesConfiguration>;
};

type SanityWeeklyEventsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityWeeklyEventsEdge>;
  readonly nodes: ReadonlyArray<SanityWeeklyEvents>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SanityWeeklyEventsGroupConnection>;
};


type SanityWeeklyEventsConnection_distinctArgs = {
  field: SanityWeeklyEventsFieldsEnum;
};


type SanityWeeklyEventsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SanityWeeklyEventsFieldsEnum;
};

type SanityWeeklyEventsEdge = {
  readonly next: Maybe<SanityWeeklyEvents>;
  readonly node: SanityWeeklyEvents;
  readonly previous: Maybe<SanityWeeklyEvents>;
};

enum SanityWeeklyEventsFieldsEnum {
  _id = '_id',
  _type = '_type',
  _createdAt = '_createdAt',
  _updatedAt = '_updatedAt',
  _rev = '_rev',
  _key = '_key',
  monday____key = 'monday._key',
  monday____type = 'monday._type',
  monday___disabled = 'monday.disabled',
  monday___heading = 'monday.heading',
  monday___details = 'monday.details',
  monday___illustration____key = 'monday.illustration._key',
  monday___illustration____type = 'monday.illustration._type',
  monday___illustration___disabled = 'monday.illustration.disabled',
  monday___illustration___image____key = 'monday.illustration.image._key',
  monday___illustration___image____type = 'monday.illustration.image._type',
  monday___illustration___image___caption = 'monday.illustration.image.caption',
  monday___illustration___image___alt = 'monday.illustration.image.alt',
  monday___illustration___image____rawAsset = 'monday.illustration.image._rawAsset',
  monday___illustration___image____rawHotspot = 'monday.illustration.image._rawHotspot',
  monday___illustration___image____rawCrop = 'monday.illustration.image._rawCrop',
  monday___illustration____rawImage = 'monday.illustration._rawImage',
  monday___tagline = 'monday.tagline',
  monday___tagline____key = 'monday.tagline._key',
  monday___tagline____type = 'monday.tagline._type',
  monday___tagline___children = 'monday.tagline.children',
  monday___tagline___children____key = 'monday.tagline.children._key',
  monday___tagline___children____type = 'monday.tagline.children._type',
  monday___tagline___children___marks = 'monday.tagline.children.marks',
  monday___tagline___children___text = 'monday.tagline.children.text',
  monday___tagline___style = 'monday.tagline.style',
  monday___tagline___list = 'monday.tagline.list',
  monday___tagline____rawChildren = 'monday.tagline._rawChildren',
  monday____rawTagline = 'monday._rawTagline',
  monday____rawIllustration = 'monday._rawIllustration',
  tuesday____key = 'tuesday._key',
  tuesday____type = 'tuesday._type',
  tuesday___disabled = 'tuesday.disabled',
  tuesday___heading = 'tuesday.heading',
  tuesday___details = 'tuesday.details',
  tuesday___illustration____key = 'tuesday.illustration._key',
  tuesday___illustration____type = 'tuesday.illustration._type',
  tuesday___illustration___disabled = 'tuesday.illustration.disabled',
  tuesday___illustration___image____key = 'tuesday.illustration.image._key',
  tuesday___illustration___image____type = 'tuesday.illustration.image._type',
  tuesday___illustration___image___caption = 'tuesday.illustration.image.caption',
  tuesday___illustration___image___alt = 'tuesday.illustration.image.alt',
  tuesday___illustration___image____rawAsset = 'tuesday.illustration.image._rawAsset',
  tuesday___illustration___image____rawHotspot = 'tuesday.illustration.image._rawHotspot',
  tuesday___illustration___image____rawCrop = 'tuesday.illustration.image._rawCrop',
  tuesday___illustration____rawImage = 'tuesday.illustration._rawImage',
  tuesday___tagline = 'tuesday.tagline',
  tuesday___tagline____key = 'tuesday.tagline._key',
  tuesday___tagline____type = 'tuesday.tagline._type',
  tuesday___tagline___children = 'tuesday.tagline.children',
  tuesday___tagline___children____key = 'tuesday.tagline.children._key',
  tuesday___tagline___children____type = 'tuesday.tagline.children._type',
  tuesday___tagline___children___marks = 'tuesday.tagline.children.marks',
  tuesday___tagline___children___text = 'tuesday.tagline.children.text',
  tuesday___tagline___style = 'tuesday.tagline.style',
  tuesday___tagline___list = 'tuesday.tagline.list',
  tuesday___tagline____rawChildren = 'tuesday.tagline._rawChildren',
  tuesday____rawTagline = 'tuesday._rawTagline',
  tuesday____rawIllustration = 'tuesday._rawIllustration',
  wednesday____key = 'wednesday._key',
  wednesday____type = 'wednesday._type',
  wednesday___disabled = 'wednesday.disabled',
  wednesday___heading = 'wednesday.heading',
  wednesday___details = 'wednesday.details',
  wednesday___illustration____key = 'wednesday.illustration._key',
  wednesday___illustration____type = 'wednesday.illustration._type',
  wednesday___illustration___disabled = 'wednesday.illustration.disabled',
  wednesday___illustration___image____key = 'wednesday.illustration.image._key',
  wednesday___illustration___image____type = 'wednesday.illustration.image._type',
  wednesday___illustration___image___caption = 'wednesday.illustration.image.caption',
  wednesday___illustration___image___alt = 'wednesday.illustration.image.alt',
  wednesday___illustration___image____rawAsset = 'wednesday.illustration.image._rawAsset',
  wednesday___illustration___image____rawHotspot = 'wednesday.illustration.image._rawHotspot',
  wednesday___illustration___image____rawCrop = 'wednesday.illustration.image._rawCrop',
  wednesday___illustration____rawImage = 'wednesday.illustration._rawImage',
  wednesday___tagline = 'wednesday.tagline',
  wednesday___tagline____key = 'wednesday.tagline._key',
  wednesday___tagline____type = 'wednesday.tagline._type',
  wednesday___tagline___children = 'wednesday.tagline.children',
  wednesday___tagline___children____key = 'wednesday.tagline.children._key',
  wednesday___tagline___children____type = 'wednesday.tagline.children._type',
  wednesday___tagline___children___marks = 'wednesday.tagline.children.marks',
  wednesday___tagline___children___text = 'wednesday.tagline.children.text',
  wednesday___tagline___style = 'wednesday.tagline.style',
  wednesday___tagline___list = 'wednesday.tagline.list',
  wednesday___tagline____rawChildren = 'wednesday.tagline._rawChildren',
  wednesday____rawTagline = 'wednesday._rawTagline',
  wednesday____rawIllustration = 'wednesday._rawIllustration',
  thursday____key = 'thursday._key',
  thursday____type = 'thursday._type',
  thursday___disabled = 'thursday.disabled',
  thursday___heading = 'thursday.heading',
  thursday___details = 'thursday.details',
  thursday___illustration____key = 'thursday.illustration._key',
  thursday___illustration____type = 'thursday.illustration._type',
  thursday___illustration___disabled = 'thursday.illustration.disabled',
  thursday___illustration___image____key = 'thursday.illustration.image._key',
  thursday___illustration___image____type = 'thursday.illustration.image._type',
  thursday___illustration___image___caption = 'thursday.illustration.image.caption',
  thursday___illustration___image___alt = 'thursday.illustration.image.alt',
  thursday___illustration___image____rawAsset = 'thursday.illustration.image._rawAsset',
  thursday___illustration___image____rawHotspot = 'thursday.illustration.image._rawHotspot',
  thursday___illustration___image____rawCrop = 'thursday.illustration.image._rawCrop',
  thursday___illustration____rawImage = 'thursday.illustration._rawImage',
  thursday___tagline = 'thursday.tagline',
  thursday___tagline____key = 'thursday.tagline._key',
  thursday___tagline____type = 'thursday.tagline._type',
  thursday___tagline___children = 'thursday.tagline.children',
  thursday___tagline___children____key = 'thursday.tagline.children._key',
  thursday___tagline___children____type = 'thursday.tagline.children._type',
  thursday___tagline___children___marks = 'thursday.tagline.children.marks',
  thursday___tagline___children___text = 'thursday.tagline.children.text',
  thursday___tagline___style = 'thursday.tagline.style',
  thursday___tagline___list = 'thursday.tagline.list',
  thursday___tagline____rawChildren = 'thursday.tagline._rawChildren',
  thursday____rawTagline = 'thursday._rawTagline',
  thursday____rawIllustration = 'thursday._rawIllustration',
  friday____key = 'friday._key',
  friday____type = 'friday._type',
  friday___disabled = 'friday.disabled',
  friday___heading = 'friday.heading',
  friday___details = 'friday.details',
  friday___illustration____key = 'friday.illustration._key',
  friday___illustration____type = 'friday.illustration._type',
  friday___illustration___disabled = 'friday.illustration.disabled',
  friday___illustration___image____key = 'friday.illustration.image._key',
  friday___illustration___image____type = 'friday.illustration.image._type',
  friday___illustration___image___caption = 'friday.illustration.image.caption',
  friday___illustration___image___alt = 'friday.illustration.image.alt',
  friday___illustration___image____rawAsset = 'friday.illustration.image._rawAsset',
  friday___illustration___image____rawHotspot = 'friday.illustration.image._rawHotspot',
  friday___illustration___image____rawCrop = 'friday.illustration.image._rawCrop',
  friday___illustration____rawImage = 'friday.illustration._rawImage',
  friday___tagline = 'friday.tagline',
  friday___tagline____key = 'friday.tagline._key',
  friday___tagline____type = 'friday.tagline._type',
  friday___tagline___children = 'friday.tagline.children',
  friday___tagline___children____key = 'friday.tagline.children._key',
  friday___tagline___children____type = 'friday.tagline.children._type',
  friday___tagline___children___marks = 'friday.tagline.children.marks',
  friday___tagline___children___text = 'friday.tagline.children.text',
  friday___tagline___style = 'friday.tagline.style',
  friday___tagline___list = 'friday.tagline.list',
  friday___tagline____rawChildren = 'friday.tagline._rawChildren',
  friday____rawTagline = 'friday._rawTagline',
  friday____rawIllustration = 'friday._rawIllustration',
  saturday____key = 'saturday._key',
  saturday____type = 'saturday._type',
  saturday___disabled = 'saturday.disabled',
  saturday___heading = 'saturday.heading',
  saturday___details = 'saturday.details',
  saturday___illustration____key = 'saturday.illustration._key',
  saturday___illustration____type = 'saturday.illustration._type',
  saturday___illustration___disabled = 'saturday.illustration.disabled',
  saturday___illustration___image____key = 'saturday.illustration.image._key',
  saturday___illustration___image____type = 'saturday.illustration.image._type',
  saturday___illustration___image___caption = 'saturday.illustration.image.caption',
  saturday___illustration___image___alt = 'saturday.illustration.image.alt',
  saturday___illustration___image____rawAsset = 'saturday.illustration.image._rawAsset',
  saturday___illustration___image____rawHotspot = 'saturday.illustration.image._rawHotspot',
  saturday___illustration___image____rawCrop = 'saturday.illustration.image._rawCrop',
  saturday___illustration____rawImage = 'saturday.illustration._rawImage',
  saturday___tagline = 'saturday.tagline',
  saturday___tagline____key = 'saturday.tagline._key',
  saturday___tagline____type = 'saturday.tagline._type',
  saturday___tagline___children = 'saturday.tagline.children',
  saturday___tagline___children____key = 'saturday.tagline.children._key',
  saturday___tagline___children____type = 'saturday.tagline.children._type',
  saturday___tagline___children___marks = 'saturday.tagline.children.marks',
  saturday___tagline___children___text = 'saturday.tagline.children.text',
  saturday___tagline___style = 'saturday.tagline.style',
  saturday___tagline___list = 'saturday.tagline.list',
  saturday___tagline____rawChildren = 'saturday.tagline._rawChildren',
  saturday____rawTagline = 'saturday._rawTagline',
  saturday____rawIllustration = 'saturday._rawIllustration',
  sunday____key = 'sunday._key',
  sunday____type = 'sunday._type',
  sunday___disabled = 'sunday.disabled',
  sunday___heading = 'sunday.heading',
  sunday___details = 'sunday.details',
  sunday___illustration____key = 'sunday.illustration._key',
  sunday___illustration____type = 'sunday.illustration._type',
  sunday___illustration___disabled = 'sunday.illustration.disabled',
  sunday___illustration___image____key = 'sunday.illustration.image._key',
  sunday___illustration___image____type = 'sunday.illustration.image._type',
  sunday___illustration___image___caption = 'sunday.illustration.image.caption',
  sunday___illustration___image___alt = 'sunday.illustration.image.alt',
  sunday___illustration___image____rawAsset = 'sunday.illustration.image._rawAsset',
  sunday___illustration___image____rawHotspot = 'sunday.illustration.image._rawHotspot',
  sunday___illustration___image____rawCrop = 'sunday.illustration.image._rawCrop',
  sunday___illustration____rawImage = 'sunday.illustration._rawImage',
  sunday___tagline = 'sunday.tagline',
  sunday___tagline____key = 'sunday.tagline._key',
  sunday___tagline____type = 'sunday.tagline._type',
  sunday___tagline___children = 'sunday.tagline.children',
  sunday___tagline___children____key = 'sunday.tagline.children._key',
  sunday___tagline___children____type = 'sunday.tagline.children._type',
  sunday___tagline___children___marks = 'sunday.tagline.children.marks',
  sunday___tagline___children___text = 'sunday.tagline.children.text',
  sunday___tagline___style = 'sunday.tagline.style',
  sunday___tagline___list = 'sunday.tagline.list',
  sunday___tagline____rawChildren = 'sunday.tagline._rawChildren',
  sunday____rawTagline = 'sunday._rawTagline',
  sunday____rawIllustration = 'sunday._rawIllustration',
  _rawMonday = '_rawMonday',
  _rawTuesday = '_rawTuesday',
  _rawWednesday = '_rawWednesday',
  _rawThursday = '_rawThursday',
  _rawFriday = '_rawFriday',
  _rawSaturday = '_rawSaturday',
  _rawSunday = '_rawSunday',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SanityWeeklyEventsFilterInput = {
  readonly _id: Maybe<StringQueryOperatorInput>;
  readonly _type: Maybe<StringQueryOperatorInput>;
  readonly _createdAt: Maybe<DateQueryOperatorInput>;
  readonly _updatedAt: Maybe<DateQueryOperatorInput>;
  readonly _rev: Maybe<StringQueryOperatorInput>;
  readonly _key: Maybe<StringQueryOperatorInput>;
  readonly monday: Maybe<SanityEventDayFilterInput>;
  readonly tuesday: Maybe<SanityEventDayFilterInput>;
  readonly wednesday: Maybe<SanityEventDayFilterInput>;
  readonly thursday: Maybe<SanityEventDayFilterInput>;
  readonly friday: Maybe<SanityEventDayFilterInput>;
  readonly saturday: Maybe<SanityEventDayFilterInput>;
  readonly sunday: Maybe<SanityEventDayFilterInput>;
  readonly _rawMonday: Maybe<JSONQueryOperatorInput>;
  readonly _rawTuesday: Maybe<JSONQueryOperatorInput>;
  readonly _rawWednesday: Maybe<JSONQueryOperatorInput>;
  readonly _rawThursday: Maybe<JSONQueryOperatorInput>;
  readonly _rawFriday: Maybe<JSONQueryOperatorInput>;
  readonly _rawSaturday: Maybe<JSONQueryOperatorInput>;
  readonly _rawSunday: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SanityWeeklyEventsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SanityWeeklyEventsEdge>;
  readonly nodes: ReadonlyArray<SanityWeeklyEvents>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SanityWeeklyEventsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SanityWeeklyEventsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  buildTime = 'buildTime'
}

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata.title',
  siteMetadata___description = 'siteMetadata.description',
  siteMetadata___author = 'siteMetadata.author',
  siteMetadata___siteUrl = 'siteMetadata.siteUrl',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  pluginCreator___id = 'pluginCreator.id',
  pluginCreator___parent___id = 'pluginCreator.parent.id',
  pluginCreator___parent___parent___id = 'pluginCreator.parent.parent.id',
  pluginCreator___parent___parent___children = 'pluginCreator.parent.parent.children',
  pluginCreator___parent___children = 'pluginCreator.parent.children',
  pluginCreator___parent___children___id = 'pluginCreator.parent.children.id',
  pluginCreator___parent___children___children = 'pluginCreator.parent.children.children',
  pluginCreator___parent___internal___content = 'pluginCreator.parent.internal.content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator.parent.internal.contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator.parent.internal.description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator.parent.internal.fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator.parent.internal.ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator.parent.internal.mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator.parent.internal.owner',
  pluginCreator___parent___internal___type = 'pluginCreator.parent.internal.type',
  pluginCreator___children = 'pluginCreator.children',
  pluginCreator___children___id = 'pluginCreator.children.id',
  pluginCreator___children___parent___id = 'pluginCreator.children.parent.id',
  pluginCreator___children___parent___children = 'pluginCreator.children.parent.children',
  pluginCreator___children___children = 'pluginCreator.children.children',
  pluginCreator___children___children___id = 'pluginCreator.children.children.id',
  pluginCreator___children___children___children = 'pluginCreator.children.children.children',
  pluginCreator___children___internal___content = 'pluginCreator.children.internal.content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator.children.internal.contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator.children.internal.description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator.children.internal.fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator.children.internal.ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator.children.internal.mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator.children.internal.owner',
  pluginCreator___children___internal___type = 'pluginCreator.children.internal.type',
  pluginCreator___internal___content = 'pluginCreator.internal.content',
  pluginCreator___internal___contentDigest = 'pluginCreator.internal.contentDigest',
  pluginCreator___internal___description = 'pluginCreator.internal.description',
  pluginCreator___internal___fieldOwners = 'pluginCreator.internal.fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator.internal.ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator.internal.mediaType',
  pluginCreator___internal___owner = 'pluginCreator.internal.owner',
  pluginCreator___internal___type = 'pluginCreator.internal.type',
  pluginCreator___resolve = 'pluginCreator.resolve',
  pluginCreator___name = 'pluginCreator.name',
  pluginCreator___version = 'pluginCreator.version',
  pluginCreator___pluginOptions___openGraph___type = 'pluginCreator.pluginOptions.openGraph.type',
  pluginCreator___pluginOptions___openGraph___locale = 'pluginCreator.pluginOptions.openGraph.locale',
  pluginCreator___pluginOptions___openGraph___url = 'pluginCreator.pluginOptions.openGraph.url',
  pluginCreator___pluginOptions___openGraph___site_name = 'pluginCreator.pluginOptions.openGraph.site_name',
  pluginCreator___pluginOptions___titleTemplate = 'pluginCreator.pluginOptions.titleTemplate',
  pluginCreator___pluginOptions___name = 'pluginCreator.pluginOptions.name',
  pluginCreator___pluginOptions___path = 'pluginCreator.pluginOptions.path',
  pluginCreator___pluginOptions___projectId = 'pluginCreator.pluginOptions.projectId',
  pluginCreator___pluginOptions___dataset = 'pluginCreator.pluginOptions.dataset',
  pluginCreator___pluginOptions___watchMode = 'pluginCreator.pluginOptions.watchMode',
  pluginCreator___pluginOptions___overlayDrafts = 'pluginCreator.pluginOptions.overlayDrafts',
  pluginCreator___pluginOptions___useMozJpeg = 'pluginCreator.pluginOptions.useMozJpeg',
  pluginCreator___pluginOptions___stripMetadata = 'pluginCreator.pluginOptions.stripMetadata',
  pluginCreator___pluginOptions___defaultQuality = 'pluginCreator.pluginOptions.defaultQuality',
  pluginCreator___pluginOptions___base64Width = 'pluginCreator.pluginOptions.base64Width',
  pluginCreator___pluginOptions___failOnError = 'pluginCreator.pluginOptions.failOnError',
  pluginCreator___pluginOptions___outputPath = 'pluginCreator.pluginOptions.outputPath',
  pluginCreator___pluginOptions___disableMinification = 'pluginCreator.pluginOptions.disableMinification',
  pluginCreator___pluginOptions___implementation___info = 'pluginCreator.pluginOptions.implementation.info',
  pluginCreator___pluginOptions___indentedSyntax = 'pluginCreator.pluginOptions.indentedSyntax',
  pluginCreator___pluginOptions___indentType = 'pluginCreator.pluginOptions.indentType',
  pluginCreator___pluginOptions___indentWidth = 'pluginCreator.pluginOptions.indentWidth',
  pluginCreator___pluginOptions___linefeed = 'pluginCreator.pluginOptions.linefeed',
  pluginCreator___pluginOptions___omitSourceMapUrl = 'pluginCreator.pluginOptions.omitSourceMapUrl',
  pluginCreator___pluginOptions___precision = 'pluginCreator.pluginOptions.precision',
  pluginCreator___pluginOptions___sourceComments = 'pluginCreator.pluginOptions.sourceComments',
  pluginCreator___pluginOptions___sourceMapContents = 'pluginCreator.pluginOptions.sourceMapContents',
  pluginCreator___pluginOptions___sourceMapEmbed = 'pluginCreator.pluginOptions.sourceMapEmbed',
  pluginCreator___pluginOptions___stages = 'pluginCreator.pluginOptions.stages',
  pluginCreator___pluginOptions___options___emitWarning = 'pluginCreator.pluginOptions.options.emitWarning',
  pluginCreator___pluginOptions___options___failOnError = 'pluginCreator.pluginOptions.options.failOnError',
  pluginCreator___pluginOptions___trackingId = 'pluginCreator.pluginOptions.trackingId',
  pluginCreator___pluginOptions___head = 'pluginCreator.pluginOptions.head',
  pluginCreator___pluginOptions___anonymize = 'pluginCreator.pluginOptions.anonymize',
  pluginCreator___pluginOptions___respectDNT = 'pluginCreator.pluginOptions.respectDNT',
  pluginCreator___pluginOptions___pageTransitionDelay = 'pluginCreator.pluginOptions.pageTransitionDelay',
  pluginCreator___pluginOptions___defer = 'pluginCreator.pluginOptions.defer',
  pluginCreator___pluginOptions___key = 'pluginCreator.pluginOptions.key',
  pluginCreator___pluginOptions___center = 'pluginCreator.pluginOptions.center',
  pluginCreator___pluginOptions___zoom = 'pluginCreator.pluginOptions.zoom',
  pluginCreator___pluginOptions___scale = 'pluginCreator.pluginOptions.scale',
  pluginCreator___pluginOptions___format = 'pluginCreator.pluginOptions.format',
  pluginCreator___pluginOptions___nickname = 'pluginCreator.pluginOptions.nickname',
  pluginCreator___pluginOptions___styles = 'pluginCreator.pluginOptions.styles',
  pluginCreator___pluginOptions___styles___feature = 'pluginCreator.pluginOptions.styles.feature',
  pluginCreator___pluginOptions___styles___element = 'pluginCreator.pluginOptions.styles.element',
  pluginCreator___pluginOptions___styles___rules = 'pluginCreator.pluginOptions.styles.rules',
  pluginCreator___pluginOptions___markers = 'pluginCreator.pluginOptions.markers',
  pluginCreator___pluginOptions___markers___size = 'pluginCreator.pluginOptions.markers.size',
  pluginCreator___pluginOptions___markers___color = 'pluginCreator.pluginOptions.markers.color',
  pluginCreator___pluginOptions___markers___location = 'pluginCreator.pluginOptions.markers.location',
  pluginCreator___pluginOptions___output = 'pluginCreator.pluginOptions.output',
  pluginCreator___pluginOptions___createLinkInHead = 'pluginCreator.pluginOptions.createLinkInHead',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator.pluginOptions.pathCheck',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator.pluginOptions.allExtensions',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator.pluginOptions.isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator.pluginOptions.jsxPragma',
  pluginCreator___nodeAPIs = 'pluginCreator.nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator.browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator.ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator.pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator.packageJson.name',
  pluginCreator___packageJson___description = 'pluginCreator.packageJson.description',
  pluginCreator___packageJson___version = 'pluginCreator.packageJson.version',
  pluginCreator___packageJson___main = 'pluginCreator.packageJson.main',
  pluginCreator___packageJson___license = 'pluginCreator.packageJson.license',
  pluginCreator___packageJson___dependencies = 'pluginCreator.packageJson.dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator.packageJson.dependencies.name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator.packageJson.dependencies.version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator.packageJson.devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator.packageJson.devDependencies.name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator.packageJson.devDependencies.version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator.packageJson.peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator.packageJson.peerDependencies.name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator.packageJson.peerDependencies.version',
  pluginCreator___packageJson___keywords = 'pluginCreator.packageJson.keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___openGraph___type = 'pluginOptions.openGraph.type',
  pluginOptions___openGraph___locale = 'pluginOptions.openGraph.locale',
  pluginOptions___openGraph___url = 'pluginOptions.openGraph.url',
  pluginOptions___openGraph___site_name = 'pluginOptions.openGraph.site_name',
  pluginOptions___titleTemplate = 'pluginOptions.titleTemplate',
  pluginOptions___name = 'pluginOptions.name',
  pluginOptions___path = 'pluginOptions.path',
  pluginOptions___projectId = 'pluginOptions.projectId',
  pluginOptions___dataset = 'pluginOptions.dataset',
  pluginOptions___watchMode = 'pluginOptions.watchMode',
  pluginOptions___overlayDrafts = 'pluginOptions.overlayDrafts',
  pluginOptions___useMozJpeg = 'pluginOptions.useMozJpeg',
  pluginOptions___stripMetadata = 'pluginOptions.stripMetadata',
  pluginOptions___defaultQuality = 'pluginOptions.defaultQuality',
  pluginOptions___base64Width = 'pluginOptions.base64Width',
  pluginOptions___failOnError = 'pluginOptions.failOnError',
  pluginOptions___outputPath = 'pluginOptions.outputPath',
  pluginOptions___disableMinification = 'pluginOptions.disableMinification',
  pluginOptions___implementation___info = 'pluginOptions.implementation.info',
  pluginOptions___useResolveUrlLoader___options___sourceMap = 'pluginOptions.useResolveUrlLoader.options.sourceMap',
  pluginOptions___indentedSyntax = 'pluginOptions.indentedSyntax',
  pluginOptions___indentType = 'pluginOptions.indentType',
  pluginOptions___indentWidth = 'pluginOptions.indentWidth',
  pluginOptions___linefeed = 'pluginOptions.linefeed',
  pluginOptions___omitSourceMapUrl = 'pluginOptions.omitSourceMapUrl',
  pluginOptions___precision = 'pluginOptions.precision',
  pluginOptions___sourceComments = 'pluginOptions.sourceComments',
  pluginOptions___sourceMapContents = 'pluginOptions.sourceMapContents',
  pluginOptions___sourceMapEmbed = 'pluginOptions.sourceMapEmbed',
  pluginOptions___stages = 'pluginOptions.stages',
  pluginOptions___options___emitWarning = 'pluginOptions.options.emitWarning',
  pluginOptions___options___failOnError = 'pluginOptions.options.failOnError',
  pluginOptions___trackingId = 'pluginOptions.trackingId',
  pluginOptions___head = 'pluginOptions.head',
  pluginOptions___anonymize = 'pluginOptions.anonymize',
  pluginOptions___respectDNT = 'pluginOptions.respectDNT',
  pluginOptions___pageTransitionDelay = 'pluginOptions.pageTransitionDelay',
  pluginOptions___defer = 'pluginOptions.defer',
  pluginOptions___key = 'pluginOptions.key',
  pluginOptions___center = 'pluginOptions.center',
  pluginOptions___zoom = 'pluginOptions.zoom',
  pluginOptions___scale = 'pluginOptions.scale',
  pluginOptions___format = 'pluginOptions.format',
  pluginOptions___nickname = 'pluginOptions.nickname',
  pluginOptions___styles = 'pluginOptions.styles',
  pluginOptions___styles___feature = 'pluginOptions.styles.feature',
  pluginOptions___styles___element = 'pluginOptions.styles.element',
  pluginOptions___styles___rules = 'pluginOptions.styles.rules',
  pluginOptions___styles___rules___visibility = 'pluginOptions.styles.rules.visibility',
  pluginOptions___styles___rules___hue = 'pluginOptions.styles.rules.hue',
  pluginOptions___styles___rules___weight = 'pluginOptions.styles.rules.weight',
  pluginOptions___styles___rules___color = 'pluginOptions.styles.rules.color',
  pluginOptions___markers = 'pluginOptions.markers',
  pluginOptions___markers___size = 'pluginOptions.markers.size',
  pluginOptions___markers___color = 'pluginOptions.markers.color',
  pluginOptions___markers___location = 'pluginOptions.markers.location',
  pluginOptions___output = 'pluginOptions.output',
  pluginOptions___createLinkInHead = 'pluginOptions.createLinkInHead',
  pluginOptions___pathCheck = 'pluginOptions.pathCheck',
  pluginOptions___allExtensions = 'pluginOptions.allExtensions',
  pluginOptions___isTSX = 'pluginOptions.isTSX',
  pluginOptions___jsxPragma = 'pluginOptions.jsxPragma',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson.name',
  packageJson___description = 'packageJson.description',
  packageJson___version = 'packageJson.version',
  packageJson___main = 'packageJson.main',
  packageJson___license = 'packageJson.license',
  packageJson___dependencies = 'packageJson.dependencies',
  packageJson___dependencies___name = 'packageJson.dependencies.name',
  packageJson___dependencies___version = 'packageJson.dependencies.version',
  packageJson___devDependencies = 'packageJson.devDependencies',
  packageJson___devDependencies___name = 'packageJson.devDependencies.name',
  packageJson___devDependencies___version = 'packageJson.devDependencies.version',
  packageJson___peerDependencies = 'packageJson.peerDependencies',
  packageJson___peerDependencies___name = 'packageJson.peerDependencies.name',
  packageJson___peerDependencies___version = 'packageJson.peerDependencies.version',
  packageJson___keywords = 'packageJson.keywords'
}

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPluginOptions = {
  readonly openGraph: Maybe<SitePluginPluginOptionsOpenGraph>;
  readonly titleTemplate: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly projectId: Maybe<Scalars['String']>;
  readonly dataset: Maybe<Scalars['String']>;
  readonly watchMode: Maybe<Scalars['Boolean']>;
  readonly overlayDrafts: Maybe<Scalars['Boolean']>;
  readonly useMozJpeg: Maybe<Scalars['Boolean']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly outputPath: Maybe<Scalars['String']>;
  readonly disableMinification: Maybe<Scalars['Boolean']>;
  readonly implementation: Maybe<SitePluginPluginOptionsImplementation>;
  readonly useResolveUrlLoader: Maybe<SitePluginPluginOptionsUseResolveUrlLoader>;
  readonly indentedSyntax: Maybe<Scalars['Boolean']>;
  readonly indentType: Maybe<Scalars['String']>;
  readonly indentWidth: Maybe<Scalars['Int']>;
  readonly linefeed: Maybe<Scalars['String']>;
  readonly omitSourceMapUrl: Maybe<Scalars['Boolean']>;
  readonly precision: Maybe<Scalars['Int']>;
  readonly sourceComments: Maybe<Scalars['Boolean']>;
  readonly sourceMapContents: Maybe<Scalars['Boolean']>;
  readonly sourceMapEmbed: Maybe<Scalars['Boolean']>;
  readonly stages: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly options: Maybe<SitePluginPluginOptionsOptions>;
  readonly trackingId: Maybe<Scalars['String']>;
  readonly head: Maybe<Scalars['Boolean']>;
  readonly anonymize: Maybe<Scalars['Boolean']>;
  readonly respectDNT: Maybe<Scalars['Boolean']>;
  readonly pageTransitionDelay: Maybe<Scalars['Int']>;
  readonly defer: Maybe<Scalars['Boolean']>;
  readonly key: Maybe<Scalars['String']>;
  readonly center: Maybe<Scalars['String']>;
  readonly zoom: Maybe<Scalars['Int']>;
  readonly scale: Maybe<Scalars['Int']>;
  readonly format: Maybe<Scalars['String']>;
  readonly nickname: Maybe<Scalars['String']>;
  readonly styles: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsStyles>>>;
  readonly markers: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsMarkers>>>;
  readonly output: Maybe<Scalars['String']>;
  readonly createLinkInHead: Maybe<Scalars['Boolean']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly openGraph: Maybe<SitePluginPluginOptionsOpenGraphFilterInput>;
  readonly titleTemplate: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly projectId: Maybe<StringQueryOperatorInput>;
  readonly dataset: Maybe<StringQueryOperatorInput>;
  readonly watchMode: Maybe<BooleanQueryOperatorInput>;
  readonly overlayDrafts: Maybe<BooleanQueryOperatorInput>;
  readonly useMozJpeg: Maybe<BooleanQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly disableMinification: Maybe<BooleanQueryOperatorInput>;
  readonly implementation: Maybe<SitePluginPluginOptionsImplementationFilterInput>;
  readonly useResolveUrlLoader: Maybe<SitePluginPluginOptionsUseResolveUrlLoaderFilterInput>;
  readonly indentedSyntax: Maybe<BooleanQueryOperatorInput>;
  readonly indentType: Maybe<StringQueryOperatorInput>;
  readonly indentWidth: Maybe<IntQueryOperatorInput>;
  readonly linefeed: Maybe<StringQueryOperatorInput>;
  readonly omitSourceMapUrl: Maybe<BooleanQueryOperatorInput>;
  readonly precision: Maybe<IntQueryOperatorInput>;
  readonly sourceComments: Maybe<BooleanQueryOperatorInput>;
  readonly sourceMapContents: Maybe<BooleanQueryOperatorInput>;
  readonly sourceMapEmbed: Maybe<BooleanQueryOperatorInput>;
  readonly stages: Maybe<StringQueryOperatorInput>;
  readonly options: Maybe<SitePluginPluginOptionsOptionsFilterInput>;
  readonly trackingId: Maybe<StringQueryOperatorInput>;
  readonly head: Maybe<BooleanQueryOperatorInput>;
  readonly anonymize: Maybe<BooleanQueryOperatorInput>;
  readonly respectDNT: Maybe<BooleanQueryOperatorInput>;
  readonly pageTransitionDelay: Maybe<IntQueryOperatorInput>;
  readonly defer: Maybe<BooleanQueryOperatorInput>;
  readonly key: Maybe<StringQueryOperatorInput>;
  readonly center: Maybe<StringQueryOperatorInput>;
  readonly zoom: Maybe<IntQueryOperatorInput>;
  readonly scale: Maybe<IntQueryOperatorInput>;
  readonly format: Maybe<StringQueryOperatorInput>;
  readonly nickname: Maybe<StringQueryOperatorInput>;
  readonly styles: Maybe<SitePluginPluginOptionsStylesFilterListInput>;
  readonly markers: Maybe<SitePluginPluginOptionsMarkersFilterListInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsImplementation = {
  readonly info: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsImplementationFilterInput = {
  readonly info: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsMarkers = {
  readonly size: Maybe<Scalars['String']>;
  readonly color: Maybe<Scalars['String']>;
  readonly location: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsMarkersFilterInput = {
  readonly size: Maybe<StringQueryOperatorInput>;
  readonly color: Maybe<StringQueryOperatorInput>;
  readonly location: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsMarkersFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsMarkersFilterInput>;
};

type SitePluginPluginOptionsOpenGraph = {
  readonly type: Maybe<Scalars['String']>;
  readonly locale: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
  readonly site_name: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsOpenGraphFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly site_name: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsOptions = {
  readonly emitWarning: Maybe<Scalars['Boolean']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsOptionsFilterInput = {
  readonly emitWarning: Maybe<BooleanQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsStyles = {
  readonly feature: Maybe<Scalars['String']>;
  readonly element: Maybe<Scalars['String']>;
  readonly rules: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsStylesRules>>>;
};

type SitePluginPluginOptionsStylesFilterInput = {
  readonly feature: Maybe<StringQueryOperatorInput>;
  readonly element: Maybe<StringQueryOperatorInput>;
  readonly rules: Maybe<SitePluginPluginOptionsStylesRulesFilterListInput>;
};

type SitePluginPluginOptionsStylesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsStylesFilterInput>;
};

type SitePluginPluginOptionsStylesRules = {
  readonly visibility: Maybe<Scalars['String']>;
  readonly hue: Maybe<Scalars['String']>;
  readonly weight: Maybe<Scalars['Float']>;
  readonly color: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsStylesRulesFilterInput = {
  readonly visibility: Maybe<StringQueryOperatorInput>;
  readonly hue: Maybe<StringQueryOperatorInput>;
  readonly weight: Maybe<FloatQueryOperatorInput>;
  readonly color: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsStylesRulesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsStylesRulesFilterInput>;
};

type SitePluginPluginOptionsUseResolveUrlLoader = {
  readonly options: Maybe<SitePluginPluginOptionsUseResolveUrlLoaderOptions>;
};

type SitePluginPluginOptionsUseResolveUrlLoaderFilterInput = {
  readonly options: Maybe<SitePluginPluginOptionsUseResolveUrlLoaderOptionsFilterInput>;
};

type SitePluginPluginOptionsUseResolveUrlLoaderOptions = {
  readonly sourceMap: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsUseResolveUrlLoaderOptionsFilterInput = {
  readonly sourceMap: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

type StaticMap = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly absolutePath: Maybe<Scalars['String']>;
  readonly center: Maybe<Scalars['String']>;
  readonly hash: Maybe<Scalars['String']>;
  readonly mapUrl: Maybe<Scalars['String']>;
  readonly nickname: Maybe<Scalars['String']>;
  readonly childFile: Maybe<File>;
};

type StaticMapConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<StaticMapEdge>;
  readonly nodes: ReadonlyArray<StaticMap>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<StaticMapGroupConnection>;
};


type StaticMapConnection_distinctArgs = {
  field: StaticMapFieldsEnum;
};


type StaticMapConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: StaticMapFieldsEnum;
};

type StaticMapEdge = {
  readonly next: Maybe<StaticMap>;
  readonly node: StaticMap;
  readonly previous: Maybe<StaticMap>;
};

enum StaticMapFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  absolutePath = 'absolutePath',
  center = 'center',
  hash = 'hash',
  mapUrl = 'mapUrl',
  nickname = 'nickname',
  childFile___sourceInstanceName = 'childFile.sourceInstanceName',
  childFile___absolutePath = 'childFile.absolutePath',
  childFile___relativePath = 'childFile.relativePath',
  childFile___extension = 'childFile.extension',
  childFile___size = 'childFile.size',
  childFile___prettySize = 'childFile.prettySize',
  childFile___modifiedTime = 'childFile.modifiedTime',
  childFile___accessTime = 'childFile.accessTime',
  childFile___changeTime = 'childFile.changeTime',
  childFile___birthTime = 'childFile.birthTime',
  childFile___root = 'childFile.root',
  childFile___dir = 'childFile.dir',
  childFile___base = 'childFile.base',
  childFile___ext = 'childFile.ext',
  childFile___name = 'childFile.name',
  childFile___relativeDirectory = 'childFile.relativeDirectory',
  childFile___dev = 'childFile.dev',
  childFile___mode = 'childFile.mode',
  childFile___nlink = 'childFile.nlink',
  childFile___uid = 'childFile.uid',
  childFile___gid = 'childFile.gid',
  childFile___rdev = 'childFile.rdev',
  childFile___ino = 'childFile.ino',
  childFile___atimeMs = 'childFile.atimeMs',
  childFile___mtimeMs = 'childFile.mtimeMs',
  childFile___ctimeMs = 'childFile.ctimeMs',
  childFile___atime = 'childFile.atime',
  childFile___mtime = 'childFile.mtime',
  childFile___ctime = 'childFile.ctime',
  childFile___birthtime = 'childFile.birthtime',
  childFile___birthtimeMs = 'childFile.birthtimeMs',
  childFile___blksize = 'childFile.blksize',
  childFile___blocks = 'childFile.blocks',
  childFile___hash = 'childFile.hash',
  childFile___publicURL = 'childFile.publicURL',
  childFile___childImageSharp___fixed___base64 = 'childFile.childImageSharp.fixed.base64',
  childFile___childImageSharp___fixed___tracedSVG = 'childFile.childImageSharp.fixed.tracedSVG',
  childFile___childImageSharp___fixed___aspectRatio = 'childFile.childImageSharp.fixed.aspectRatio',
  childFile___childImageSharp___fixed___width = 'childFile.childImageSharp.fixed.width',
  childFile___childImageSharp___fixed___height = 'childFile.childImageSharp.fixed.height',
  childFile___childImageSharp___fixed___src = 'childFile.childImageSharp.fixed.src',
  childFile___childImageSharp___fixed___srcSet = 'childFile.childImageSharp.fixed.srcSet',
  childFile___childImageSharp___fixed___srcWebp = 'childFile.childImageSharp.fixed.srcWebp',
  childFile___childImageSharp___fixed___srcSetWebp = 'childFile.childImageSharp.fixed.srcSetWebp',
  childFile___childImageSharp___fixed___originalName = 'childFile.childImageSharp.fixed.originalName',
  childFile___childImageSharp___resolutions___base64 = 'childFile.childImageSharp.resolutions.base64',
  childFile___childImageSharp___resolutions___tracedSVG = 'childFile.childImageSharp.resolutions.tracedSVG',
  childFile___childImageSharp___resolutions___aspectRatio = 'childFile.childImageSharp.resolutions.aspectRatio',
  childFile___childImageSharp___resolutions___width = 'childFile.childImageSharp.resolutions.width',
  childFile___childImageSharp___resolutions___height = 'childFile.childImageSharp.resolutions.height',
  childFile___childImageSharp___resolutions___src = 'childFile.childImageSharp.resolutions.src',
  childFile___childImageSharp___resolutions___srcSet = 'childFile.childImageSharp.resolutions.srcSet',
  childFile___childImageSharp___resolutions___srcWebp = 'childFile.childImageSharp.resolutions.srcWebp',
  childFile___childImageSharp___resolutions___srcSetWebp = 'childFile.childImageSharp.resolutions.srcSetWebp',
  childFile___childImageSharp___resolutions___originalName = 'childFile.childImageSharp.resolutions.originalName',
  childFile___childImageSharp___fluid___base64 = 'childFile.childImageSharp.fluid.base64',
  childFile___childImageSharp___fluid___tracedSVG = 'childFile.childImageSharp.fluid.tracedSVG',
  childFile___childImageSharp___fluid___aspectRatio = 'childFile.childImageSharp.fluid.aspectRatio',
  childFile___childImageSharp___fluid___src = 'childFile.childImageSharp.fluid.src',
  childFile___childImageSharp___fluid___srcSet = 'childFile.childImageSharp.fluid.srcSet',
  childFile___childImageSharp___fluid___srcWebp = 'childFile.childImageSharp.fluid.srcWebp',
  childFile___childImageSharp___fluid___srcSetWebp = 'childFile.childImageSharp.fluid.srcSetWebp',
  childFile___childImageSharp___fluid___sizes = 'childFile.childImageSharp.fluid.sizes',
  childFile___childImageSharp___fluid___originalImg = 'childFile.childImageSharp.fluid.originalImg',
  childFile___childImageSharp___fluid___originalName = 'childFile.childImageSharp.fluid.originalName',
  childFile___childImageSharp___fluid___presentationWidth = 'childFile.childImageSharp.fluid.presentationWidth',
  childFile___childImageSharp___fluid___presentationHeight = 'childFile.childImageSharp.fluid.presentationHeight',
  childFile___childImageSharp___sizes___base64 = 'childFile.childImageSharp.sizes.base64',
  childFile___childImageSharp___sizes___tracedSVG = 'childFile.childImageSharp.sizes.tracedSVG',
  childFile___childImageSharp___sizes___aspectRatio = 'childFile.childImageSharp.sizes.aspectRatio',
  childFile___childImageSharp___sizes___src = 'childFile.childImageSharp.sizes.src',
  childFile___childImageSharp___sizes___srcSet = 'childFile.childImageSharp.sizes.srcSet',
  childFile___childImageSharp___sizes___srcWebp = 'childFile.childImageSharp.sizes.srcWebp',
  childFile___childImageSharp___sizes___srcSetWebp = 'childFile.childImageSharp.sizes.srcSetWebp',
  childFile___childImageSharp___sizes___sizes = 'childFile.childImageSharp.sizes.sizes',
  childFile___childImageSharp___sizes___originalImg = 'childFile.childImageSharp.sizes.originalImg',
  childFile___childImageSharp___sizes___originalName = 'childFile.childImageSharp.sizes.originalName',
  childFile___childImageSharp___sizes___presentationWidth = 'childFile.childImageSharp.sizes.presentationWidth',
  childFile___childImageSharp___sizes___presentationHeight = 'childFile.childImageSharp.sizes.presentationHeight',
  childFile___childImageSharp___gatsbyImage___imageData = 'childFile.childImageSharp.gatsbyImage.imageData',
  childFile___childImageSharp___original___width = 'childFile.childImageSharp.original.width',
  childFile___childImageSharp___original___height = 'childFile.childImageSharp.original.height',
  childFile___childImageSharp___original___src = 'childFile.childImageSharp.original.src',
  childFile___childImageSharp___resize___src = 'childFile.childImageSharp.resize.src',
  childFile___childImageSharp___resize___tracedSVG = 'childFile.childImageSharp.resize.tracedSVG',
  childFile___childImageSharp___resize___width = 'childFile.childImageSharp.resize.width',
  childFile___childImageSharp___resize___height = 'childFile.childImageSharp.resize.height',
  childFile___childImageSharp___resize___aspectRatio = 'childFile.childImageSharp.resize.aspectRatio',
  childFile___childImageSharp___resize___originalName = 'childFile.childImageSharp.resize.originalName',
  childFile___childImageSharp___id = 'childFile.childImageSharp.id',
  childFile___childImageSharp___parent___id = 'childFile.childImageSharp.parent.id',
  childFile___childImageSharp___parent___children = 'childFile.childImageSharp.parent.children',
  childFile___childImageSharp___children = 'childFile.childImageSharp.children',
  childFile___childImageSharp___children___id = 'childFile.childImageSharp.children.id',
  childFile___childImageSharp___children___children = 'childFile.childImageSharp.children.children',
  childFile___childImageSharp___internal___content = 'childFile.childImageSharp.internal.content',
  childFile___childImageSharp___internal___contentDigest = 'childFile.childImageSharp.internal.contentDigest',
  childFile___childImageSharp___internal___description = 'childFile.childImageSharp.internal.description',
  childFile___childImageSharp___internal___fieldOwners = 'childFile.childImageSharp.internal.fieldOwners',
  childFile___childImageSharp___internal___ignoreType = 'childFile.childImageSharp.internal.ignoreType',
  childFile___childImageSharp___internal___mediaType = 'childFile.childImageSharp.internal.mediaType',
  childFile___childImageSharp___internal___owner = 'childFile.childImageSharp.internal.owner',
  childFile___childImageSharp___internal___type = 'childFile.childImageSharp.internal.type',
  childFile___id = 'childFile.id',
  childFile___parent___id = 'childFile.parent.id',
  childFile___parent___parent___id = 'childFile.parent.parent.id',
  childFile___parent___parent___children = 'childFile.parent.parent.children',
  childFile___parent___children = 'childFile.parent.children',
  childFile___parent___children___id = 'childFile.parent.children.id',
  childFile___parent___children___children = 'childFile.parent.children.children',
  childFile___parent___internal___content = 'childFile.parent.internal.content',
  childFile___parent___internal___contentDigest = 'childFile.parent.internal.contentDigest',
  childFile___parent___internal___description = 'childFile.parent.internal.description',
  childFile___parent___internal___fieldOwners = 'childFile.parent.internal.fieldOwners',
  childFile___parent___internal___ignoreType = 'childFile.parent.internal.ignoreType',
  childFile___parent___internal___mediaType = 'childFile.parent.internal.mediaType',
  childFile___parent___internal___owner = 'childFile.parent.internal.owner',
  childFile___parent___internal___type = 'childFile.parent.internal.type',
  childFile___children = 'childFile.children',
  childFile___children___id = 'childFile.children.id',
  childFile___children___parent___id = 'childFile.children.parent.id',
  childFile___children___parent___children = 'childFile.children.parent.children',
  childFile___children___children = 'childFile.children.children',
  childFile___children___children___id = 'childFile.children.children.id',
  childFile___children___children___children = 'childFile.children.children.children',
  childFile___children___internal___content = 'childFile.children.internal.content',
  childFile___children___internal___contentDigest = 'childFile.children.internal.contentDigest',
  childFile___children___internal___description = 'childFile.children.internal.description',
  childFile___children___internal___fieldOwners = 'childFile.children.internal.fieldOwners',
  childFile___children___internal___ignoreType = 'childFile.children.internal.ignoreType',
  childFile___children___internal___mediaType = 'childFile.children.internal.mediaType',
  childFile___children___internal___owner = 'childFile.children.internal.owner',
  childFile___children___internal___type = 'childFile.children.internal.type',
  childFile___internal___content = 'childFile.internal.content',
  childFile___internal___contentDigest = 'childFile.internal.contentDigest',
  childFile___internal___description = 'childFile.internal.description',
  childFile___internal___fieldOwners = 'childFile.internal.fieldOwners',
  childFile___internal___ignoreType = 'childFile.internal.ignoreType',
  childFile___internal___mediaType = 'childFile.internal.mediaType',
  childFile___internal___owner = 'childFile.internal.owner',
  childFile___internal___type = 'childFile.internal.type'
}

type StaticMapFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly center: Maybe<StringQueryOperatorInput>;
  readonly hash: Maybe<StringQueryOperatorInput>;
  readonly mapUrl: Maybe<StringQueryOperatorInput>;
  readonly nickname: Maybe<StringQueryOperatorInput>;
  readonly childFile: Maybe<FileFilterInput>;
};

type StaticMapGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<StaticMapEdge>;
  readonly nodes: ReadonlyArray<StaticMap>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type StaticMapSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<StaticMapFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type GatsbySanityImageFixedFragment = Pick<SanityImageFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type aboutPageQueryVariables = Exact<{ [key: string]: never; }>;


type aboutPageQuery = { readonly sanitySiteSettings: Maybe<(
    Pick<SanitySiteSettings, 'address'>
    & { readonly openGraph: Maybe<(
      Pick<SanityOpenGraph, 'title' | 'description'>
      & { readonly image: Maybe<(
        Pick<SanityMainImage, 'alt'>
        & { readonly asset: Maybe<(
          Pick<SanityImageAsset, 'url'>
          & { readonly fixed: Maybe<GatsbySanityImageFixedFragment> }
        )> }
      )> }
    )> }
  )>, readonly staticMap: Maybe<(
    Pick<StaticMap, 'center' | 'absolutePath' | 'mapUrl'>
    & { readonly childFile: Maybe<(
      Pick<File, 'nlink' | 'publicURL'>
      & { readonly childImageSharp: Maybe<{ readonly fluid: Maybe<GatsbyImageSharpFluidFragment> }> }
    )> }
  )> };

type TAGLINEFragment = (
  Pick<SanityBlock, 'style' | 'list'>
  & { readonly children: Maybe<ReadonlyArray<Maybe<Pick<SanitySpan, 'text' | 'marks'>>>> }
);

type FLUID_IMAGEFragment = { readonly image: Maybe<{ readonly asset: Maybe<{ readonly fluid: Maybe<GatsbySanityImageFluidFragment> }> }> };

type GatsbySanityImageFluidFragment = Pick<SanityImageFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type homepageQueryVariables = Exact<{ [key: string]: never; }>;


type homepageQuery = { readonly sanityPage: Maybe<{ readonly hero: Maybe<(
      Pick<SanityHero, 'heading' | 'label'>
      & { readonly tagline: Maybe<ReadonlyArray<Maybe<TAGLINEFragment>>>, readonly illustration: Maybe<FLUID_IMAGEFragment>, readonly cta: Maybe<Pick<SanityCta, 'link' | 'title' | 'kind' | 'route'>> }
    )> }>, readonly sanitySiteSettings: Maybe<{ readonly happyHour: Maybe<ReadonlyArray<Maybe<TAGLINEFragment>>>, readonly openGraph: Maybe<(
      Pick<SanityOpenGraph, 'title' | 'description'>
      & { readonly image: Maybe<(
        Pick<SanityMainImage, 'alt'>
        & { readonly asset: Maybe<(
          Pick<SanityImageAsset, 'url'>
          & { readonly fixed: Maybe<GatsbySanityImageFixedFragment> }
        )> }
      )> }
    )> }> };

type MENU_ITEM_EDGEFragment = { readonly node: (
    Pick<SanityMenuItem, 'name' | 'description' | 'id'>
    & { readonly slug: Maybe<Pick<SanitySlug, 'current'>>, readonly menuItemPriceOption: Maybe<ReadonlyArray<Maybe<Pick<SanityMenuItemPriceOption, 'price' | 'variant'>>>>, readonly menuItemCategory: Maybe<ReadonlyArray<Maybe<Pick<SanityMenuItemCategory, 'title' | 'description'>>>> }
  ) };

type MENU_PAGEQueryVariables = Exact<{ [key: string]: never; }>;


type MENU_PAGEQuery = { readonly addIns: { readonly edges: ReadonlyArray<MENU_ITEM_EDGEFragment> }, readonly bulk: { readonly edges: ReadonlyArray<MENU_ITEM_EDGEFragment> }, readonly coffee: { readonly edges: ReadonlyArray<MENU_ITEM_EDGEFragment> }, readonly herbalTea: { readonly edges: ReadonlyArray<MENU_ITEM_EDGEFragment> }, readonly kavaKava: { readonly edges: ReadonlyArray<MENU_ITEM_EDGEFragment> }, readonly kratom: { readonly edges: ReadonlyArray<MENU_ITEM_EDGEFragment> }, readonly superfoods: { readonly edges: ReadonlyArray<MENU_ITEM_EDGEFragment> }, readonly cats: { readonly edges: ReadonlyArray<{ readonly node: Pick<SanityMenuItemCategory, 'title' | 'description' | 'id'> }> } };

type PictureShowImagesQueryVariables = Exact<{ [key: string]: never; }>;


type PictureShowImagesQuery = { readonly sanityGalleryImages: Maybe<(
    Pick<SanityGalleryImages, 'id'>
    & { readonly images: Maybe<ReadonlyArray<Maybe<{ readonly image: Maybe<(
        Pick<SanityMainImage, 'alt' | 'caption'>
        & { readonly asset: Maybe<(
          Pick<SanityImageAsset, 'assetId'>
          & { readonly fluid: Maybe<GatsbySanityImageFluidFragment> }
        )> }
      )> }>>> }
  )> };

type DAYFragment = (
  Pick<SanityEventDay, 'heading' | 'details'>
  & { readonly tagline: Maybe<ReadonlyArray<Maybe<TAGLINEFragment>>>, readonly illustration: Maybe<(
    FLUID_IMAGEFragment
    & SMALL_FIXED_IMAGEFragment
  )> }
);

type SMALL_FIXED_IMAGEFragment = { readonly image: Maybe<{ readonly asset: Maybe<{ readonly fixed: Maybe<GatsbySanityImageFixedFragment> }> }> };

type weeklyEventsQueryVariables = Exact<{ [key: string]: never; }>;


type weeklyEventsQuery = { readonly sanitySiteSettings: Maybe<{ readonly happyHour: Maybe<ReadonlyArray<Maybe<TAGLINEFragment>>> }>, readonly allSanityWeeklyEvents: { readonly edges: ReadonlyArray<{ readonly node: { readonly monday: Maybe<DAYFragment>, readonly tuesday: Maybe<DAYFragment>, readonly wednesday: Maybe<DAYFragment>, readonly thursday: Maybe<DAYFragment>, readonly friday: Maybe<DAYFragment>, readonly saturday: Maybe<DAYFragment>, readonly sunday: Maybe<DAYFragment> } }> } };

}