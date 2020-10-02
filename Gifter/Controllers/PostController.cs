using System;
using Microsoft.AspNetCore.Mvc;
using Gifter.Repositories;
using Gifter.Models;

namespace Gifter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepository.GetAll());
        }
        //this is the route pattern
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _postRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpPost]
        public IActionResult Post(Post post)
        {
            _postRepository.Add(post);
            return CreatedAtAction("Get", new { id = post.Id }, post);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Post post)
        {
            if (id != post.Id)
            {
                return BadRequest();
            }

            _postRepository.Update(post);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postRepository.Delete(id);
            return NoContent();
        }

        [HttpGet("GetWithComments")]
        public IActionResult GetWithComments()
        {
            var posts = _postRepository.GetAllWithComments();
            return Ok(posts);
        }
        //this is the route 
        [HttpGet("GetPostByIdWithComments/{id}")]
        public IActionResult GetPostByIdWithComments(int id)
        {
            var post = _postRepository.GetPostByIdWithComments(id);
            //if null return NotFound 
            if (post == null)
            {
                return NotFound();
            }
            //otherwise return the single post with comments
            return Ok(post);
        }


        [HttpGet("search")]
        //we have two parameters 
        // the q is a search term
        //sort defines the order in which the search results should be returned. In this example we want "top" results to be first...whatever that means.
        //t specifies the time limit to search. In this example we only want results from the past month
        public IActionResult Search(string q, bool sortDesc)
        {
            //we pass these parameters into our search method in our repository 
            return Ok(_postRepository.Search(q, sortDesc));
        }

        [HttpGet("hottest")]
        //we have two parameters 
        //the since are search terms
        public IActionResult Hottest(DateTime since, bool sortDesc)
        {
            //we pass these parameters into our hottest method in our repository 
            return Ok(_postRepository.Hottest(since, sortDesc));
        }
    }
}