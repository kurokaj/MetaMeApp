// Functions from blog and gitrepo: https://github.com/TemugeB/joint_angles_calculate
// They are translated to JavaScript and made fit this project

import * as utils from "utils.js";
import * as tf from '@tensorflow/tfjs';


// KPTS is a dictionary with following keys:
// TODO

export function read_keypoints(predictions){
    // Modify prediction to fit the joint angle representation
    // TODO
}

function convert_to_dictionart(mapping, kpts){
    // Convert keypoints to dictionary
    // TODO
}

function add_hips_and_neck(kpts){
    // BlazePose is missing midpoints in shoulder- and hip line. -> Create those.
    // TODO
}


function median_filter(kpts, windowsize){
    // Filter to ease out jitter and anomalities in kpts-stream 
    // TODO
}

export function get_bone_lenghts(gltfModel){
    // Get the bone lenghts from the GLTF model
    // TODO
}

function get_base_skeleton(kpts, normalization_bone){
    // Define the t-pose and normalize it by normalization_bone (default: 'hip' -> 'neck')
    // TODO
}

function get_hips_position_and_rotation(frame_pos, root_joint, root_define_joints){
    // Calculate the rotation of the root joint with respect to the world coordinates
    // Default values root_joint='hips', root_define_joints='['lefthip', 'neck']'
    // TODO
}

function get_joint_rotation(joint_name, joints_hierarchy, joints_offset, frame_rotations, frame_pos){
    // Calculate the rotation matrixs and joint angles input joint 
}

function get_rotation_chain(joint, hierarchy, frame_rotations){
    // Helper to compose the rotation matrixs
}

// THIS IS WHERE THE MAGIC HAPPENS 
export function calculate_joint_angles(ktps){
    // Calculate joint angles frame-by-frame 
}