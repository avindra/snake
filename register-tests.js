/**
 * Solution for running mocha, babel and typescript together
 * 
 * @see https://github.com/babel/babel/issues/8673#issuecomment-420141918
 */
require("@babel/register")({ extensions: ['.js', '.jsx', '.ts', '.tsx'] });