<template>
  <div class="left-content">
    <article class="article">
      1231
    </article>
  </div>
</template>

<script>
export default {
  layout: 'zhuanlan'
}
</script>

<style lang="scss" scoped>
.left-content {
  .article {
    padding: 16px;
    margin-bottom: 16px;
    background: #fff;
    .title {
      font-size: 22px;
    }
    .meta {
      margin: 8px 0;
      color: #555;
      font-size: 12px;
      span {
        margin-right: 6px;
      }
    }
  }
}
</style>

<style lang="scss">
.markdown-content {
  line-height: 2;
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  p,
  blockquote,
  ul,
  ol,
  dl,
  pre {
    margin-top: 0;
    margin-bottom: 8px;
  }
  h1,
  h2 {
    border-bottom: 1px solid #eaecef;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-bottom: 0.3em;
    margin-top: 12px;
    margin-bottom: 8px;
    font-weight: 600;

    padding-left: 0;
    text-indent: 0;

    &:target {
      padding-top: 4.5rem;
    }
  }

  a {
    color: #0366d6;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  ul,
  ol {
    padding-left: 2rem;

    > li {
      line-height: 1.4rem;
      padding: 0.5rem;
      list-style-type: disc;

      > p {
        text-indent: 0;
      }

      > ul {
        li {
          list-style-type: circle;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  ol > li {
    list-style-type: decimal;
  }

  blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;

    p {
      text-indent: 0em;

      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  pre {
    padding: 12px;
    overflow: auto;
    // font-size: 85%;
    line-height: 1.6;
    background-color: #f0f0f0;
    border-radius: 3px;
    code {
      padding: 0;
      margin: 0;
      font-size: 100%;
      background: transparent;
    }
  }
  code {
    padding: 0.2em 0.4em;
    margin: 0;
    // font-size: 85%;
    background-color: #f0f0f0;
    border-radius: 3px;
  }

  hr {
    margin-bottom: 8px;
    height: 1px;
    background: #ccc;
    border: none;
  }
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    border: 5px solid #ddd;
    margin-bottom: 8px;
  }
}
</style>
