import { API_PETS } from '../constants';
import { headers} from '../headers';

/**
 * Fetches multiple posts/listings with options for pagination, sorting, and filtering.
 * @async
 * @function readPosts
 * @param {Object} options - Options for fetching posts.
 * @param {number} [options.limit=12] - Max number of posts to return.
 * @param {number} [options.page=1] - Page number for pagination.
 * @param {string} [options.sort='created'] - Field to sort by.
 * @param {string} [options.sortOrder='desc'] - Sort order, 'asc' or 'desc'.
 * @param {boolean} [options.active=true] - Whether to filter by active posts.
 * @returns {Promise<Array>} Array of posts sorted by created date.
 * @throws {Error} If the API call fails.
*/

export async function readPosts({
    limit = 12,
    page = 1,
    sort = 'created',
    sortOrder = 'desc',
    active = true,} = {}) {
  try {
      const url = new URL(API_PETS);
      url.searchParams.append('limit', limit);
      url.searchParams.append('page', page);
      url.searchParams.append('owner', true);
      url.searchParams.append('adoptionStatus', active);
      url.searchParams.append('sort', sort);
      url.searchParams.append('sortOrder', sortOrder);
      
      const response = await fetch(url.toString(), {
          headers: headers({ apiKeyRequired: false }),
          method: 'GET',
        });
        
        if (!response.ok) {
            throw new Error(`Failed to fetch posts: ${response.statusText}`);
        }
        
        const { data = [] } = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

/**
 * Reads a single post by its ID.
 *
 * @async
 * @function readPost
 * @param {string|number} id - The ID of the post to read.
 * @returns {Promise<object>} The post data.
 * @throws {Error} If the API request fails or the ID is missing.
 *
 * @example
 * const post = await readPost(123);
 * console.log(post); // Outputs post data with ID 123
*/


export async function readPost(id) {
  if (!id) {
    throw new Error('Post ID is required.');
  }

  const url = new URL(`${API_PETS}/${id}`);

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: headers({ apiKeyRequired: false }),
  });

  if (!response.ok) {
    throw new Error(`Failed to read post with ID ${id}: ${response.statusText}`);
  }

  const postData = await response.json();
  return postData;
}


export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
