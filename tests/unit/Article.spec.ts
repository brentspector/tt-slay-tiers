import { render } from '@testing-library/vue'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import '@testing-library/jest-dom'
import Article from '../../src/views/Article.vue'
import client from '../../src/contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { useRoute } from 'vue-router'

// Mock the client module
vi.mock('../../src/contentful', () => ({
  default: {
    getEntry: vi.fn(),
    getAssets: vi.fn()
  }
}))

// Mock the useRoute function
vi.mock('vue-router', () => ({
  useRoute: vi.fn()
}))

vi.mock('@contentful/rich-text-html-renderer', () => ({
  documentToHtmlString: vi.fn()
}))

describe('Article.vue', () => {
  const mockHoverContent = 'test content'

  const mockRoute = {
    params: {
      id: 'test-article-id'
    }
  }

  const mockArticle = {
    fields: {
      title: 'Test Article',
      summary: 'This is a test summary',
      content: `This is the [[${mockHoverContent}]]`
    }
  }

  beforeEach(() => {
    vi.clearAllMocks();
    (useRoute as ReturnType<typeof vi.fn>).mockReturnValue(mockRoute);
    (documentToHtmlString as ReturnType<typeof vi.fn>).mockImplementation((args) => args);
  })

  it('renders article title and summary', async () => {
    (client.getEntry as ReturnType<typeof vi.fn>).mockResolvedValueOnce(mockArticle)
    const { findByText } = render(Article, {
      global: {
        mocks: {
          $route: mockRoute
        }
      }
    })

    expect(await findByText(mockArticle.fields.title)).toBeInTheDocument()
    expect(await findByText(mockArticle.fields.summary)).toBeInTheDocument()
  })
})