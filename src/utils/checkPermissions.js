import { UnauthorizedError } from '../errors/index.js';

const checkPermissions = (requestUser, ressourceUserId) => {
  if (requestUser.userId !== ressourceUserId.toString())
    throw new UnauthorizedError('Accès à cette route non autorisé');
};

export { checkPermissions };
