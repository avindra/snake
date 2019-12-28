import torch

###
# This module is based on the example 
# from the pytorch documentation:
#
# https://pytorch.org/tutorials/beginner/pytorch_with_examples.html#pytorch-tensors
###

dtype = torch.float
# device = torch.device("cpu")# Uncomment this to run on GPU
device = torch.device("cuda:0") 

# N is batch size; D_in is input dimension;
# H is hidden dimension; D_out is output dimension.

# Entire state of the game matrix will be 
# converted into a one-dimensional vector of length 200
board_width = 20
board_height = 20

##
# Dimension of the output is a one dimensional 
# vector representing the action to take (up, down, left, right, rest)
N, D_in, H, D_out = 5, board_width * board_height, 100, 10

# Create random input and output data
x = torch.randn(N, D_in, device=device, dtype=dtype)
y = torch.randn(N, D_out, device=device, dtype=dtype)

# Randomly initialize weights
w1 = torch.randn(D_in, H, device=device, dtype=dtype)
w2 = torch.randn(H, D_out, device=device, dtype=dtype)

learning_rate = 1e-6

n_epochs = 500

for t in range(n_epochs):
    # Forward pass: compute predicted y
    h = x.mm(w1)
    h_relu = h.clamp(min=0)
    y_pred = h_relu.mm(w2)

    # Compute and print loss
    loss = (y_pred - y).pow(2).sum().item()
    if t % 100 == 99:
        print(t, loss)

    # Backprop to compute gradients of w1 and w2 with respect to loss
    grad_y_pred = 2.0 * (y_pred - y)
    grad_w2 = h_relu.t().mm(grad_y_pred)
    grad_h_relu = grad_y_pred.mm(w2.t())
    grad_h = grad_h_relu.clone()
    grad_h[h < 0] = 0
    grad_w1 = x.t().mm(grad_h)

    # Update weights using gradient descent
    w1 -= learning_rate * grad_w1
    w2 -= learning_rate * grad_w2

