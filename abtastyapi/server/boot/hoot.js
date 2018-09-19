/* eslint-disable no-unused-vars */
const utils = require('loopback-component-jsonapi/lib/utils');

const regexs = [/^find$/, /^__get__.*/];

module.exports = app => {
  const remotes = app.remotes();

  remotes.after('**', (ctx, next) => {
    const matches = regexs.filter(regex => regex.test(ctx.method.name));

    if (!matches.length) {
      return next();
    }

    let model = utils.getModelFromContext(ctx, app);

    // const primaryKeyField = utils.primaryKeyForModel(model);
    const regexRelationFromUrl = /\/.*\/(.*$)/g;
    const regexMatches = regexRelationFromUrl.exec(ctx.req.path);
    const relationName =
      regexMatches && regexMatches[1] ? regexMatches[1] : null;
    const relation = model.relations[relationName];

    let limit = 30;
    let page = 1;
    let where;

    if (ctx.args && ctx.args.filter) {
      const filter = ctx.args.filter || {};

      where = filter.where || {};
      limit = filter.limit || limit;
      page = filter.offset || page;
    }

    if (relation && relationName) {
      model = relation.modelTo;
    }

    return model.count(where, (err, total) => {
      ctx.res.set('X-Total-Count', total);
      ctx.res.set('Access-Control-Expose-Headers', 'X-Total-Count');
      next();
    });
  });
};
