using Breeze.ContextProvider;
using Breeze.ContextProvider.EF6;
using Breeze.WebApi2;
using MvcMovie.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MvcMovie.Controllers
{
    [BreezeController]
    public class MoviesApiController : ApiController
    {
        private readonly EFContextProvider<MovieDbContext> _contextProvider = new EFContextProvider<MovieDbContext>();

        // ~/breeze/fooitems/Metadata 
        [HttpGet]
        public string Metadata()
        {
            return _contextProvider.Metadata();
        }

        // ~/breeze/MovieApi/Movies
        // ~/breeze/MovieApi/Movies?$filter=IsArchived eq false&$orderby=ReleaseDate 
        [HttpGet]
        public IQueryable<Movie> Movies()
        {
            return _contextProvider.Context.Movies;
        }

        // ~/breeze/MovieApi/SaveChanges
        [HttpPost]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            return _contextProvider.SaveChanges(saveBundle);
        }
    }
}
