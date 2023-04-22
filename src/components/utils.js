import * as tf from '@tensorflow/tfjs';

// General rotation matrices
export function get_R_x(theta){
    R = tf.tensor([[1, 0, 0],
        [0, tf.cos(theta), -tf.sin(theta)],
        [0, tf.sin(theta),  tf.cos(theta)]]);
    return R

}

export function get_R_y(theta){
    R = tf.tensor([[tf.cos(theta), 0, tf.sin(theta)],
        [0, 1, 0],
        [-tf.sin(theta), 0,  tf.cos(theta)]])
    return R
}

export function get_R_z(theta){
    R = tf.tensor([[tf.cos(theta), -tf.sin(theta), 0],
        [tf.sin(theta), tf.cos(theta), 0],
        [0, 0, 1]])
    return 
}

// Rotation matrix to take A to B 
// Select formalism that fits to javascript
export function Get_R(A,B){
    //get unit vectors
    uA = A/tf.sqrt(tf.sum(tf.square(A)));
    uB = B/tf.sqrt(tf.sum(tf.square(B)));

    //get products
    dotprod = tf.dot(uA,uB);
    crossprod = tf.sqrt(tf.sum(tf.square(tf.linalg.cross(uA,uB)))); //magnitude

    //get new unit vectors
    u = uA;
    v = uB - dotprod*uA;
    v = v/tf.sqrt(tf.sum(tf.square(v)));
    w = tf.linalg.cross(uA, uB);
    w = w/tf.sqrt(tf.sum(tf.square(w)));

    //get change of basis matrix
    C = tf.tensor([u, v, w])

    //get rotation matrix in new basis
    R_uvw = tf.tensor([[dotprod, -crossprod, 0],
                      [crossprod, dotprod, 0],
                      [0, 0, 1]])

    //full rotation matrix (see matMul order!)
    R = tf.matMul(tf.matMul(C.transpose(), R_uvw), C);

    return R
}

// Matrix R to rotation along each axis -> Rz @ Ry @ Rx !NB THE ORDER! 
export function Decompose_R_ZYX(R){
    //decomposes as RzRyRx. Note the order: ZYX <- rotation by x first
    thetaz = tf.atan2(R[1,0], R[0,0])
    thetay = tf.atan2(-R[2,0], tf.sqrt(R[2,1].square() + R[2,2].square()))
    thetax = tf.atan2(R[2,1], R[2,2])

    return thetaz, thetay, thetax
}

